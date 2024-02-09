// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import cocktails from './cocktailsSlice';
import patients from './patientsSlice';
import reports from './reportsSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, cocktails, patients, reports });

export default reducers;
