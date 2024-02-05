// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import cocktails from './cocktailsSlice';
import patients from './patientsSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, cocktails, patients });

export default reducers;
