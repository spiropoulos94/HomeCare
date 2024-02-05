import { Box } from '@mui/material';

export const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'first_name', headerName: 'Name', flex: 1 },
  { field: 'last_name', headerName: 'Surname', flex: 1 },
  { field: 'AMKA', headerName: 'AMKA', flex: 1 },
  {
    field: 'address',
    headerName: 'Address',
    flex: 1,
    renderCell: () => {
      return <Box>Address</Box>;
    }
  },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'healthSecurityNumber', headerName: 'Health Security Nr', flex: 1 }
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   flex: 1,
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
