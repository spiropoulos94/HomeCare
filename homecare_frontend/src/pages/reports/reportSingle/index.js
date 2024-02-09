// material-ui
import { Box, Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainCard from 'components/MainCard';
import Loader from 'components/Loader';
// import PatientForm from './PatientForm';
import { fetchReports, selectAllReports } from 'store/reducers/reportsSlice';
import ReportForm from './ReportForm';

// ==============================|| SAMPLE PAGE ||============================== //

const ReportSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const reports = useSelector(selectAllReports);

  if (!reports.length) {
    dispatch(fetchReports());
  }

  const isNewReport = location.pathname.includes('/new');

  let reportData = state ? state : reports.find((p) => p.id == id);

  const reportTitle = isNewReport ? 'New Report' : `${reportData?.patientFullname} Report `;

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', mb: (theme) => theme.spacing(2) }}>
        <Button startIcon={<ArrowBackIcon />} sx={{ ml: 'auto' }} onClick={() => navigate('/reports')}>
          All Reports
        </Button>
      </Box>

      {reportData ? (
        <MainCard sx={{ mt: (theme) => theme.spacing(2) }} title={reportTitle}>
          <ReportForm reportData={isNewReport ? null : reportData} />
        </MainCard>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ReportSingle;
