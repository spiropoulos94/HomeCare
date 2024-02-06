// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPatientsMock } from 'services/homeCareService';

// initial state
const initialState = {
  patients: [],
  loading: 'idle'
};

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
  const response = await getPatientsMock();
  return response;
});

// ==============================|| SLICE - patients ||============================== //

const patients = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched patients to the array
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAllpatients = (state) => state.patients.patients;
export const getPatientsError = (state) => state.patients.error;
export const getPatientsStatus = (state) => state.patients.status;

export default patients.reducer;
