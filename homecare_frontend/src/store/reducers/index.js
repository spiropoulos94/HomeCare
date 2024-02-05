// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import cocktails from './cocktailsSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, cocktails });

export default reducers;
