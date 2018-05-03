import React from 'react';
import { View } from 'react-native';
import cardSectionStyles from './CardSection.style';
import PropTypes from 'prop-types';

const CardSection = (props) => {
  const { containerStyle } = cardSectionStyles;
  return (
    <View style={containerStyle}>
      { props.children }
    </View>
  );
};

CardSection.propTypes = {
  children: PropTypes.element
};

export default CardSection;
