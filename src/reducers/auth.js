const INITIAL_STATE = {
  username: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'USERNAME_CHANGED':
    return { ...state, username: action.payload };
  case 'PASSWORD_CHANGED':
    return { ...state, password: action.payload };
  case 'LOGIN_USER':
    return { ...state, username: '', password: ''};
  default:
    return state;
  }
};
