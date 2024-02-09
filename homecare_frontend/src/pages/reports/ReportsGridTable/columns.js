import { Box } from '@mui/material';

export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'professionalName', headerName: 'Professional Name', width: 150 },
  {
    field: 'patient',
    headerName: 'Patient FullName',
    width: 150,
    renderCell: ({ value }) => <Box>{`${value.firstName} ${value.lastName}`}</Box>
  },
  { field: 'profession', headerName: 'Profession', width: 150 },
  { field: 'absenceStatus', headerName: 'Absence Status', width: 150 },
  { field: 'arrivalTime', headerName: 'Arrival Time', width: 150 },
  { field: 'departureTime', headerName: 'Departure Time', width: 150 },
  {
    field: 'patientAddress',

    headerName: 'Patient Address',
    width: 150,
    renderCell: ({ row }) => {
      return (
        <Box display={'flex'} flexDirection={'column'}>
          <Box>{row.patient.address.street}</Box>
          <Box>{row.patient.address.number}</Box>
        </Box>
      );
    }
  },
  {
    field: 'patientHealthSecurityNumber',
    headerName: 'Patient Health Security Number',
    width: 150,
    valueGetter: ({ row }) => {
      return row?.patient?.healthSecurityNumber;
    }
  },
  {
    field: 'deliveredServices',
    headerName: 'Services',
    width: 250,
    renderCell: ({ row }) => {
      return (
        <Box display={'flex'} flexDirection={'column'}>
          {row.deliveredServices.map((service) => {
            console.log(service);
            return <Box key={service.value}>&#8226; {service.label}</Box>;
          })}
        </Box>
      );
    }
  }

  // {
  //   field: 'address',
  //   headerName: 'Address',
  //   width: 150,
  // renderCell: ({ value }) => {
  //   return (
  //     <Box>
  //       {value.street} {value.number}
  //     </Box>
  //   );
  // }
  // },
  // { field: 'phone', headerName: 'Phone', width: 150 },
  // { field: 'healthSecurityNumber', headerName: 'Health Security Nr', width: 150 }
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
