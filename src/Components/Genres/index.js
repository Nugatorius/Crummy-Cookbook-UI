import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Utils/Header';

import styles from './Genres.style';
import CardSection from '../Utils/CardSection';
import Card from '../Utils/Card';
import * as actions from '../../actions';

class Genre extends Component {
  componentWillMount() {
    this.props.fetchAllGenres();
  }
  renderLoading() {
    return (
      <View>
        <Header title='Movies' />
        <Text>Loading</Text>
      </ View>
    );
  }

  renderGenres(genres) {
    return( 
      <View style={{ display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'}}>
        <Header title='Movies' />
        <ScrollView>
          {genres.map(this.renderGenre)}
        </ScrollView>
      </View>
    );
  }
  renderGenre(genre) {
    const {
      descriptionStyle,
      headerStyle,
      headerTextStyle,
      albumImageStyle 
    } = styles;
    return (
      <Card key={genre.id}>
        <CardSection>
          <View style={headerStyle}>
            <Text style={headerTextStyle}>{genre.original_title}</Text>
            <Text style={descriptionStyle}>{genre.overview}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={albumImageStyle} source={{ uri: `https://image.tmdb.org/t/p/w500/${genre.poster_path}` }} />
        </CardSection>
      </Card>
    );
  }
  render() {
    return this.props.loading ? this.renderLoading() : this.renderGenres(this.props.genres.data.results);
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.genre.loading,
    genres: state.genre.genres
  };
};

Genre.propTypes = {
  loading: PropTypes.bool,
  genres: PropTypes.object,
  fetchAllGenres: PropTypes.func
};
export default connect(mapStateToProps, actions)(Genre);
