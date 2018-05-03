import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BeerListItem from '../BeerListItem';
import Header from '../Utils/Header';


class BeerList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.beers);
  }

  renderRow(beer) {
    return <BeerListItem beer={beer} />;
  }

  render() {
    return (
      <View>
        <Header title='Beers' />
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ View>
    );
  }
}

const mapStateToProps = (state) => {
  return {beers: state.beers };
};

BeerList.propTypes = {
  beers: PropTypes.array
};
export default connect(mapStateToProps)(BeerList);
