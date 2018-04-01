import { combineReducers } from 'redux';
import counterReducer from './counter'; 
import navReducer from './navigation'; 
import authReducer from './auth';

export default combineReducers({
  counter: counterReducer,
  nav: navReducer,
  auth: authReducer
});
