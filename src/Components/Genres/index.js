import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, SearchBar, Card } from 'react-native-elements';

import styles from './Genres.style';
import * as actions from '../../actions';

class Genre extends Component {
  componentWillMount() {
    this.props.fetchAllGenres();
  }
  onInputChange(text) {
    this.props.searchGenre(text);
  }
  renderLoading() {
    return (
      <View>
        <Header title='Movies' />
        <Text>Loading</Text>
      </View>
    );
  }

  renderGenres(genres) {
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'black',
        flex: 1
      }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Movies', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor="black"
        />
        <SearchBar
          lightTheme
          containerStyle={{ backgroundColor: 'white' }}
          inputStyle={{ backgroundColor: 'black' }}
          placeholder='Search Movies'
          onChangeText={(text) => this.onInputChange(text)}
          cancelButtonTitle="Cancel" />
        <ScrollView>
          {genres.map(this.renderGenre)}
        </ScrollView>
      </View>
    );
  }
  renderGenre(genre) {
    const {
      descriptionStyle,
    } = styles;
    return (
      <Card
        key={genre.id} containerStyle={{ padding: 0 }}
        image={{ uri: `https://image.tmdb.org/t/p/w500/${genre.poster_path}` }}
        title={genre.original_title}
      >
        <Text style={descriptionStyle}>{genre.overview}</Text>
      </Card>
    );
  }
  render() {
    const searchGenres = this.props.searchedGenres.length ? this.props.searchedGenres : this.props.genres;
    return this.props.loading ? this.renderLoading() : this.renderGenres(searchGenres);
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.genre.loading,
    genres: state.genre.genres,
    searchedGenres: state.genre.searchedGenres
  };
};

Genre.propTypes = {
  loading: PropTypes.bool,
  genres: PropTypes.array,
  fetchAllGenres: PropTypes.func,
  searchGenre: PropTypes.func,
  searchedGenres: PropTypes.array
};
export default connect(mapStateToProps, actions)(Genre);
