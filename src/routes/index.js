import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import PropTypes from 'prop-types';

import AuthRoutes from './auth.routes';
import Home from '../Components/Home';
import Counter from '../Components/CounterRedux';

export const Router = StackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  auth: {
    screen: AuthRoutes,
    navigationOptions: {
      header: null
    }
  },
  counter: {
    screen: Counter,
    navigationOptions: {
      title: 'Counter Redux',
      headerTintColor: 'black',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '400'
      },
      headerStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
      },
    }
  },
});

class RouterWithNavState extends Component {

  render() {
    const addListener = createReduxBoundAddListener('root');
    const { dispatch, nav } = this.props;
    return (
      <Router
        navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    nav: state.nav
  });
};

RouterWithNavState.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
};

export default connect(mapStateToProps)(RouterWithNavState);
