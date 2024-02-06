// ==============================|| PATIENTS  ||============================== //

import MainCard from 'components/MainCard';
import PatientsGridTable from './PatientsGridTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients, getPatientsError, getPatientsStatus, selectAllpatients } from 'store/reducers/patientsSlice';
import { alertError } from 'utils/toast';

const Patients = () => {
  const dispatch = useDispatch();

  const patients = useSelector(selectAllpatients);
  const patientsError = useSelector(getPatientsError);
  const patientsStatus = useSelector(getPatientsStatus);

  useEffect(() => {
    if (!patients.length) {
      dispatch(fetchPatients());
    }
  }, [dispatch, patients.length]);

  useEffect(() => {
    if (patientsError) {
      alertError(patientsError);
    }
  }, [patientsError]);

  return (
    <>
      <MainCard title="Patients">
        <PatientsGridTable isLoading={patientsStatus === 'loading'} data={patients} />
      </MainCard>
    </>
  );
};

export default Patients;
