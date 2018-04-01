import { Router } from '../routes';

const router = Router.router;
const loginNavAction = router.getActionForPathAndParams('signup');
const initialNavState = router.getStateForAction(loginNavAction);

const navReducer = (state = initialNavState, action) => {
  const nextState = router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
