import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import PropTypes from 'prop-types';

import TabsNavigator from './tabs.routes';
import Home from '../Components/Home';

export const Router = StackNavigator({
  counter: {
    screen: TabsNavigator,
    navigationOptions: {
      title: 'counter'
    }
  },
  home: {
    screen: Home
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
