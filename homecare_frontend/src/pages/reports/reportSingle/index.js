// material-ui
import { Box, Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainCard from 'components/MainCard';
import Loader from 'components/Loader';
import { fetchReports, getReportsStatus, selectAllReports } from 'store/reducers/reportsSlice';
import ReportForm from './ReportForm';

// ==============================|| SAMPLE PAGE ||============================== //

const ReportSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const reports = useSelector(selectAllReports);
  const reportsStatus = useSelector(getReportsStatus);

  const isNewReport = location.pathname.includes('/new');

  if (!reports.length && !isNewReport) {
    dispatch(fetchReports());
  }

  // if isNewReport then no report data are passed, otherwise retrieve them from location state or redux
  let reportData = isNewReport ? null : state ? state : reports.find((p) => p.id == id);

  const reportTitle = isNewReport
    ? 'New Report'
    : `${reportData?.patient?.firstName} ${reportData?.patient?.lastName} report - ${reportData?.date}`;

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', mb: (theme) => theme.spacing(2) }}>
        <Button startIcon={<ArrowBackIcon />} sx={{ ml: 'auto' }} onClick={() => navigate('/reports')}>
          All Reports
        </Button>
      </Box>

      {reportsStatus !== 'loading' ? (
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
