// ==============================|| REPORTS  ||============================== //

import MainCard from 'components/MainCard';
import ReportsGridTable from './ReportsGridTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports, getReportsError, getReportsStatus, selectAllReports } from 'store/reducers/reportsSlice';
import { normalizeData } from './ReportsGridTable/columns';
// import { alertError } from 'utils/toast';

const Reports = () => {
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
      <MainCard title="Reports">{<ReportsGridTable isLoading={reportsStatus === 'loading'} data={normalizeData(reports)} />}</MainCard>
    </>
  );
};

export default Reports;
