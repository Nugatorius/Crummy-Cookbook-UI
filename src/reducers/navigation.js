import { Router } from '../routes';

const router = Router.router;
const homeNavAction = router.getActionForPathAndParams('auth/login');
const initialNavState = router.getStateForAction(homeNavAction);
const navReducer = (state = initialNavState, action) => { 
  const nextState = router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
