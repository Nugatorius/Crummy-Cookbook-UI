export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const inputChanged = (text, label) => {
  return {
    type: 'INPUT_CHANGED',
    payload: {
      text: text,
      label: label
    }
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: 'LOGIN_USER',
    payload: { email, password }
  };
};

export const signupUser = (user) => {
  return {
    type: 'SIGNUP_USER',
    payload: user
  };
};
