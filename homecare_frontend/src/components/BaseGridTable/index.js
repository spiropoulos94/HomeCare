import { useState } from 'react';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { alertError } from 'utils/toast';
import CustomToolbar from './CustomToolbar';
import PropTypes from 'prop-types';

// This component is a wrapper over MUIs Datagrid

export default function BaseGridTable({
  data,
  columns,
  handleProcessRowUpdate,
  isLoading,
  deleteItemFunc = null,
  refreshData = null,
  hideToolbar = false,
  sx
}) {
  const apiRef = useGridApiRef();
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const cancelCellEditOnFocusOut = (params, event) => {
    if (params?.reason === 'cellFocusOut') {
      event.defaultMuiPrevented = true;

      apiRef.current.stopCellEditMode({
        id: params.id,
        field: params.field,
        ignoreModifications: true // will also discard the changes made
      });
    }
  };

  const batchDeleteFunc = async (items) => {
    for (const item of items) {
      await deleteItemFunc(item);
    }

    refreshData();
  };

  const colsWithRefetch = columns.map((c) => {
    return {
      ...c,
      refetchData: refreshData || null
    };
  });

  return (
    <DataGrid
      density="comfortable"
      sx={{
        ...sx,
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: (theme) => theme.typography.fontWeightBold
        },
        '& .MuiDataGrid-toolbarContainer': {
          border: 1,
          borderColor: (theme) => theme.palette.divider,
          py: (theme) => theme.spacing(2)
        },
        '& .MuiDataGrid-columnHeaders': {
          border: 1,
          borderTop: 0,
          borderColor: (theme) => theme.palette.divider
        },
        '& .MuiDataGrid-row': {
          border: 1,
          borderColor: (theme) => theme.palette.divider
        },
        '& .MuiDataGrid-main': {
          border: 1,
          borderColor: (theme) => theme.palette.divider
        }
      }}
      autoHeight
      loading={isLoading}
      apiRef={apiRef}
      slots={{
        toolbar: hideToolbar ? null : CustomToolbar,
        noRowsOverlay: () => <p>No rows found</p>
      }}
      slotProps={{
        toolbar: {
          setSelectMultiple,
          rowSelectionModel,
          batchDelete: batchDeleteFunc
        }
      }}
      rows={data}
      columns={colsWithRefetch}
      checkboxSelection={selectMultiple}
      onRowSelectionModelChange={(ids) => {
        setRowSelectionModel(ids);
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      pageSizeOptions={[5, 10, 20, 40, 50]}
      disableRowSelectionOnClick
      processRowUpdate={(updatedRow, originalRow) => handleProcessRowUpdate(updatedRow, originalRow)}
      onProcessRowUpdateError={(error) => alertError(error)}
      onCellEditStop={(params, event) => cancelCellEditOnFocusOut(params, event)}
    />
  );
}

BaseGridTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  handleProcessRowUpdate: PropTypes.func,
  isLoading: PropTypes.bool,
  deleteItemFunc: PropTypes.func,
  refreshData: PropTypes.func,
  hideToolbar: PropTypes.bool,
  sx: PropTypes.object
};
