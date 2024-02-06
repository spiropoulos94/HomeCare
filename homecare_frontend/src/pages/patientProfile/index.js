// material-ui
import { Box, Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients, selectAllpatients } from 'store/reducers/patientsSlice';
import MainCard from 'components/MainCard';
import Loader from 'components/Loader';
import PatientForm from './PatientForm';
import BreadCrumbs from 'components/BreadCrumbs';

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
        <BreadCrumbs
          items={[
            {
              title: 'Home',
              url: '/'
            },
            {
              title: 'Patients',
              url: '/patients'
            },
            {
              title: `${patientData.firstName} ${patientData.lastName}`
            }
          ]}
        />
        <Button startIcon={<ArrowBackIcon />} sx={{ ml: 'auto' }} onClick={() => navigate('/patients')}>
          All Patients
        </Button>
      </Box>

      {patientData ? (
        <MainCard sx={{ mt: (theme) => theme.spacing(2) }} title={`Patient Profile - ${patientData.firstName} ${patientData.lastName}`}>
          <PatientForm patientData={patientData} />
        </MainCard>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PatientProfile;
