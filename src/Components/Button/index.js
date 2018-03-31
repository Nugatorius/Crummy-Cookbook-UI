import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import buttonStyles from './Button.style';

const Button = (props) => {
  const { buttonStyle, buttonTextStyle } = buttonStyles;
  return (
    <TouchableOpacity style={ buttonStyle } onPress={() => props.onPress()}>
      <Text style={ buttonTextStyle }>{props.text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default Button;
