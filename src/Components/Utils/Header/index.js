import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import headerStyles from './Header.style';

const Header = (props) => {
  const { textStyle, viewStyle } = headerStyles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
