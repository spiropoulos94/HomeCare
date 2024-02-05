import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ChecklistIcon from '@mui/icons-material/Checklist';

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton
} from '@mui/x-data-grid';
import { Button, IconButton, Typography } from '@mui/material';

const CustomToolbar = ({ setSelectMultiple, rowSelectionModel, batchDelete }) => {
  return (
    <GridToolbarContainer>
      <IconButton color="info" onClick={() => setSelectMultiple((prev) => !prev)}>
        <ChecklistIcon />
      </IconButton>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      {rowSelectionModel.length > 0 && batchDelete && (
        <Button color="error" sx={{ ml: 'auto' }} onClick={() => batchDelete(rowSelectionModel)}>
          <DeleteIcon />
          <Typography variant="button">Delete {rowSelectionModel.length}</Typography>
        </Button>
      )}
    </GridToolbarContainer>
  );
};

CustomToolbar.propTypes = {
  setSelectMultiple: PropTypes.func,
  rowSelectionModel: PropTypes.any,
  batchDelete: PropTypes.func
};

export default CustomToolbar;
