// types
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getReportsMock } from 'services/homeCareService';

// initial state
const initialState = {
  reports: [],
  loading: 'idle'
};

export const fetchReports = createAsyncThunk('reports/fetchreports', async () => {
  const response = await getReportsMock();
  return response;
});

// ==============================|| SLICE - reports ||============================== //

const reports = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched reports to the array
        state.reports = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAllReports = (state) => state.reports.reports;
export const getReportsError = (state) => state.reports.error;
export const getReportsStatus = (state) => state.reports.status;

export default reports.reducer;
