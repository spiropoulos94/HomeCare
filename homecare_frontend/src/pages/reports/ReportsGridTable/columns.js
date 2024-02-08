import { Box } from '@mui/material';

export const normalizeData = (data) => {
  console.log('data mesa sto normaluze', data);
  return data.map((entry) => {
    return {
      id: entry.reportID,
      professionalName: entry.professionalName,
      profession: entry.profession,
      absence: entry.absenceStatus,
      arrivalTime: entry.arrivalTime,
      departureTime: entry.departureTime,
      patientFullname: `${entry.patient.firstName} ${entry.patient.lastName}`,
      patientAddress: entry.patient.address,
      patientHealthSecurityNumber: entry.patient.healthSecurityNumber
    };
  });
};

export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'professionalName', headerName: 'Professional Name', width: 150 },
  { field: 'profession', headerName: 'Profession', width: 150 },
  { field: 'absence', headerName: 'Absence Status', width: 150 },
  { field: 'arrivalTime', headerName: 'Arrival Time', width: 150 },
  { field: 'departureTime', headerName: 'Departure Time', width: 150 },
  { field: 'patientFullname', headerName: 'Patient FullName', width: 150 },
  {
    field: 'patientAddress',
    headerName: 'Patient Address',
    width: 150,
    renderCell: ({ value }) => {
      return (
        <Box display={'flex'} flexDirection={'column'}>
          <Box>{value.street}</Box>
          <Box>{value.number}</Box>
        </Box>
      );
    }
  },
  { field: 'patientHealthSecurityNumber', headerName: 'Patient Health Security Number', width: 150 }

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
