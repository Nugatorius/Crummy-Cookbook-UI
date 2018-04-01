import { TabNavigator } from 'react-navigation';
import CounterReact from '../Components/CounterReact';
import CounterRedux from '../Components/CounterRedux';

export default TabNavigator({
  Counteract: {
    screen: CounterReact
  },
  CounterRedux: {
    screen: CounterRedux
  }
},
{
  initialRouteName: 'Counteract'
});
