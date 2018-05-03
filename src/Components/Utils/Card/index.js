import React from 'react';
import { View } from 'react-native';
import cardStyles from './Card.style';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { containerStyle } = cardStyles;
  return (
    <View style={containerStyle}>
      { props.children }
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

export default Card;
