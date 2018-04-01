import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import PropTypes from 'prop-types';

import Home from '../Components/Home';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Counter from '../Components/CounterRedux';

export const Router = StackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  counter: {
    screen: Counter,
    navigationOptions: {
      title: 'counter'
    }
  }
});

class RouterWithNavState extends Component {

  render() {
    const addListener = createReduxBoundAddListener('root');
    const { dispatch, nav } = this.props;
    return (
      <Router
        navigation={addNavigationHelpers({ dispatch, state: nav , addListener})}
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
