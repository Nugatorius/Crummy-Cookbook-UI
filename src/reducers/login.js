const INITIAL_STATE = {
  username: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'INPUT_CHANGED':
    return { ...state, [action.payload.label]: action.payload.text };
  case 'LOGIN_USER':
    return { ...state, username: '', password: ''};
  default:
    return state;
  }
};
