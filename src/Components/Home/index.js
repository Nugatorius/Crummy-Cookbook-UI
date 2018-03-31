import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation'; 

import HomeStyle from './Home.style';
import Header from '../Header';
import Button from '../Button';

export default class Home extends Component {
  
  handleOnPress() {
    const navigateToCounter = NavigationActions.navigate({
      routeName:'counter'
    });
    
    this.props.navigation.dispatch(navigateToCounter);
  }

  render() {
    const { viewStyles } = HomeStyle;
    return (
      <View style={viewStyles}>
        <Header title="Crummy Cook recipes" />
        {<Button text="Counter" onPress={() => this.handleOnPress()} />}
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

