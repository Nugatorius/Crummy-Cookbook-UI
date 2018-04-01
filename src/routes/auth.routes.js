import { TabNavigator } from 'react-navigation';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

export default TabNavigator({
  login: {
    screen: Login
  },
  signup: {
    screen: Signup
  }
},
{
  initialRouteName: 'login'
});
