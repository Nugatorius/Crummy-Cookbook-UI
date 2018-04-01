const INITIAL_STATE = {
  name: '',
  username: '',
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'INPUT_CHANGED':
    return { ...state, [action.payload.label]: action.payload.text };
  case 'SIGNUP_USER':
    return { ...INITIAL_STATE };
  default:
    return state;
  }
};
