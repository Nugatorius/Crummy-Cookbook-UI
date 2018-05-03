import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation'; 

import { connect } from 'react-redux';
import * as actions from '../../actions';

import LoginStyle from './Login.style';

import Header from '../Utils/Header';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

class Login extends Component {
  
  onInputChange(text, label) {
    this.props.inputChanged(text, label);
  }
  
  onLoginPress() {
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
    const navigateToCounter = NavigationActions.navigate({
      routeName:'genre'
    });
    this.props.navigation.dispatch(navigateToCounter);
  }

  render() {
    const { viewStyles } = LoginStyle;
    return (
      <View style={viewStyles}>
        <Header title='Crummy Cook recipes - Login' />
        <Input label='Username' placeholder='Username' isPassword={false} onChangeText={(text) => this.onInputChange(text, 'username')} value={this.props.username} /> 
        <Input label='Password' placeholder='Password' isPassword={true} onChangeText={(text) => this.onInputChange(text, 'password')} value={this.props.password} /> 
        <Button text='Login' onPress={() => this.onLoginPress()} />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  inputChanged: PropTypes.func,
  loginUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    password: state.login.password,
  };
};
export default connect(mapStateToProps, actions)(Login);
