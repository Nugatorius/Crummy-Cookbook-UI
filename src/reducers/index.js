import { combineReducers } from 'redux';
import counterReducer from './counter'; 
import navReducer from './navigation'; 
import loginReducer from './login';
import signupReducer from './signup';

export default combineReducers({
  counter: counterReducer,
  nav: navReducer,
  login: loginReducer,
  signup: signupReducer
});
