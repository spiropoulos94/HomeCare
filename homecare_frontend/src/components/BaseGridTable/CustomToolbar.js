import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ListIcon from '@mui/icons-material/List';

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton
} from '@mui/x-data-grid';
import { Box, Button, IconButton, Popover, Typography } from '@mui/material';
import { useState } from 'react';

const ControlsPopover = ({ batchDelete, rowSelectionModel }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ ml: 'auto' }}>
      <IconButton color="primary" aria-describedby={id} variant="contained" onClick={handleClick}>
        <ListIcon fontSize="large" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Box sx={{ py: 1 }} display={'flex'} flexDirection={'column'}>
          <Button color="error" sx={{ ml: 'auto' }} onClick={() => batchDelete(rowSelectionModel)}>
            <DeleteIcon />
            <Typography variant="button">Delete {rowSelectionModel.length}</Typography>
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

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
      {rowSelectionModel.length > 0 && <ControlsPopover batchDelete={batchDelete} rowSelectionModel={rowSelectionModel} />}
    </GridToolbarContainer>
  );
};

CustomToolbar.propTypes = {
  setSelectMultiple: PropTypes.func,
  rowSelectionModel: PropTypes.any,
  batchDelete: PropTypes.func
};

export default CustomToolbar;
