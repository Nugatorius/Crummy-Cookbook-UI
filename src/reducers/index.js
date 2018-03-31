import { combineReducers } from 'redux';
import counterReducer from './counter'; 
import navReducer from './navigation'; 

export default combineReducers({
  counter: counterReducer,
  nav: navReducer
});
