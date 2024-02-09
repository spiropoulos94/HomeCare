// ==============================|| REPORTS  ||============================== //

import MainCard from 'components/MainCard';
import ReportsGridTable from './ReportsGridTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports, getReportsError, getReportsStatus, selectAllReports } from 'store/reducers/reportsSlice';
import { Box, Button } from '@mui/material';
import { FileAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reports = useSelector(selectAllReports);
  const reportsError = useSelector(getReportsError);
  const reportsStatus = useSelector(getReportsStatus);

  useEffect(() => {
    if (!reports.length) {
      dispatch(fetchReports());
    }
  }, [dispatch, reports.length]);

  useEffect(() => {
    if (reportsError) {
      alertError(reportsError);
    }
  }, [reportsError]);

  return (
    <>
      <MainCard title="Reports">
        <Box mb={(theme) => theme.spacing(2)} display={'flex'} justifyContent={'end'}>
          <Button onClick={() => navigate('new')} startIcon={<FileAddOutlined />} variant="contained" color="success">
            Create Report
          </Button>
        </Box>
        <ReportsGridTable isLoading={reportsStatus === 'loading'} data={reports} />
      </MainCard>
    </>
  );
};

export default Reports;
