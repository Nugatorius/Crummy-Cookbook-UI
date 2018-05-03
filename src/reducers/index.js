import { combineReducers } from 'redux';
import counterReducer from './counter'; 
import navReducer from './navigation'; 
import loginReducer from './login';
import signupReducer from './signup';
import beerReducer from './beer';
import genreReducer from './genre';

export default combineReducers({
  counter: counterReducer,
  nav: navReducer,
  login: loginReducer,
  signup: signupReducer,
  beers: beerReducer,
  genre: genreReducer
});
