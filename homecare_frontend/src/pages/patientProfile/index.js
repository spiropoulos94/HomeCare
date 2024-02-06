// material-ui
import { Box, Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';

// ==============================|| SAMPLE PAGE ||============================== //

const PatientProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log({ id });
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', mb: (theme) => theme.spacing(2) }}>
        <Button startIcon={<ArrowBackIcon />} sx={{ ml: 'auto' }} onClick={() => navigate('/patients')}>
          All Patients
        </Button>
      </Box>

      {/* {patientData && (
        <MainCard title={`Patient ${id} Profile - ${patientData.first_name} ${patientData.last_name}`}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
          </Typography>
        </MainCard>
      )} */}
    </>
  );
};

export default PatientProfile;
