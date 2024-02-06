// material-ui
import { Box, Button, Typography } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients, selectAllpatients } from 'store/reducers/patientsSlice';
import MainCard from 'components/MainCard';
import Loader from 'components/Loader';

// ==============================|| SAMPLE PAGE ||============================== //

const PatientProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const patients = useSelector(selectAllpatients);

  if (!patients.length) {
    dispatch(fetchPatients());
  }

  // if locationState is available use it, else fetch all patients and select the right one
  let patientData = state ? state : patients.find((p) => p.id == id);

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', mb: (theme) => theme.spacing(2) }}>
        <Button startIcon={<ArrowBackIcon />} sx={{ ml: 'auto' }} onClick={() => navigate('/patients')}>
          All Patients
        </Button>
      </Box>

      {patientData ? (
        <MainCard title={`Patient ${id} Profile - ${patientData.first_name} ${patientData.last_name}`}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
          </Typography>
        </MainCard>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PatientProfile;
