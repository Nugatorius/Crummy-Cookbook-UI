import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupStyle from './Signup.style';

import Header from '../Utils/Header';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

class Signup extends Component {

  onInputChange(text, label) {
    this.props.inputChanged(text, label);
  }

  onSignupPress() {
    const { name, username, password, email } = this.props;
    this.props.signupUser({ name, username, password, email });
    const navigateToCounter = NavigationActions.navigate({
      routeName: 'counter'
    });
    this.props.navigation.dispatch(navigateToCounter);
  }

  render() {
    const { viewStyles } = SignupStyle;
    return (
      <View style={viewStyles}>
        <Header title='Crummy Cook recipes - Signup' />
        <Input label='Name' placeholder='Name' isPassword={false} onChangeText={(text) => this.onInputChange(text, 'name')} value={this.props.name} />
        <Input label='Username' placeholder='Username' isPassword={false} onChangeText={(text) => this.onInputChange(text, 'username')} value={this.props.username} />
        <Input label='Email' placeholder='Email' isPassword={false} onChangeText={(text) => this.onInputChange(text, 'email')} value={this.props.email} />
        <Input label='Password' placeholder='Password' isPassword={true} oonChangeText={(text) => this.onInputChange(text, 'password')} value={this.props.password} />
        <Button text='Signup' onPress={() => this.onSignupPress()} />
      </View>
    );
  }
}

Signup.propTypes = {
  navigation: PropTypes.object,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  inputChanged: PropTypes.func,
  signupUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    name: state.signup.name,
    username: state.signup.username,
    email: state.signup.email,
    password: state.signup.password
  };
};
export default connect(mapStateToProps, actions)(Signup);
