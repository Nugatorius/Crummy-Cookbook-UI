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
  
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  
  onLoginPress() {
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
    const navigateToCounter = NavigationActions.navigate({
      routeName:'counter'
    });
    this.props.navigation.dispatch(navigateToCounter);
  }

  render() {
    const { viewStyles } = LoginStyle;
    return (
      <View style={viewStyles}>
        <Header title="Crummy Cook recipes - Login" />
        <Input label='Username' placeholder='Username' password={false} onChangeText={this.onUsernameChange.bind(this)} value={this.props.username} /> 
        <Input label='Password' placeholder='Password' password={true} onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} /> 
        <Button text="Login" onPress={() => this.onLoginPress()} />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  usernameChanged: PropTypes.func,
  passwordChanged: PropTypes.func,
  loginUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password,
  };
};
export default connect(mapStateToProps, actions)(Login);
