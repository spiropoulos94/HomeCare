import { Box } from '@mui/material';

export const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'first_name', headerName: 'Name', width: 150 },
  { field: 'last_name', headerName: 'Surname', width: 150 },
  { field: 'AMKA', headerName: 'AMKA', width: 150 },
  {
    field: 'address',
    headerName: 'Address',
    width: 150,
    renderCell: () => {
      return <Box>Address</Box>;
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
