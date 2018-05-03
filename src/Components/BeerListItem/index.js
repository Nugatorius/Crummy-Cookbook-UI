import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  LayoutAnimation,
  Image,
  View
} from 'react-native';
import BeerListItemStyle from './BeerListItem.style';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CardSection from '../Utils/CardSection';
import Card from '../Utils/Card';

class BeerListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  render() {
    const {
      descriptionStyle,
      headerStyle,
      headerTextStyle,
      albumImageStyle 
    } = BeerListItemStyle;
    const {
      name,
      tagline,
      imageUrl
    } = this.props.beer;
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <View style={headerStyle}>
              <Text style={headerTextStyle}>{name}</Text>
              <Text style={descriptionStyle}>{tagline}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Image style={albumImageStyle} source={{ uri: imageUrl }} />
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedbeerId === ownProps.beer.id;
  return { expanded: expanded };
};

const mapDispatchToProps = actions;

BeerListItem.propTypes = {
  beer: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerListItem);
