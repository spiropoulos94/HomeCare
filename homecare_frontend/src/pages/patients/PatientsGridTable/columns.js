import { Box } from '@mui/material';

export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'Name', width: 150 },
  { field: 'lastName', headerName: 'Surname', width: 150 },
  { field: 'amka', headerName: 'AMKA', width: 150 },
  {
    field: 'address',
    headerName: 'Address',
    width: 150,
    renderCell: ({ value }) => {
      return (
        <Box>
          {value.street} {value.number}
        </Box>
      );
    }
  },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'healthSecurityNumber', headerName: 'Health Security Nr', width: 150 }
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   width:150,
  //   renderCell: () => {
  //     return (
  //       <Box>
  //         <Button size="small" startIcon={<DownloadIcon />} variant="contained" color="primary" sx={{ mr: 1 }}>
  //           Download
  //         </Button>
  //         <Button size="small" startIcon={<RemoveCircleOutlineIcon />} variant="contained" color="secondary">
  //           Remove
  //         </Button>
  //       </Box>
  //     );
  //   }
  // }
];
