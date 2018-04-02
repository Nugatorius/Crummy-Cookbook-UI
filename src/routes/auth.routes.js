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
  tabBarPosition: 'bottom',
  initialRouteName: 'login',
  swipeEnabled: true,
  tabBarOptions: {
    activeBackgroundColor: '#007aff',
    activeTintColor: 'white',
    inactiveBackgroundColor: '#57a8ff',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 14,
      fontWeight: 'bold',
      padding: 10
    }
  }
});
