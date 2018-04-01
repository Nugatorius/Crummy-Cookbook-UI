import React from 'react';
import { TextInput, View, Text } from 'react-native';
import inputStyles from './Input.style';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { textInputStyle, labelStyle, containerStyle } = inputStyles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput secureTextEntry={props.isPassword} placeholder={props.placeholder} autoCorrect={false} style={textInputStyle} value={props.value} onChangeText={ (text) => props.onChangeText(text) }/>
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isPassword: PropTypes.bool,
  onChangeText: PropTypes.func
};

export default Input;
