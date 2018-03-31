import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

class CounterRedux extends Component {

  onIncrement() {
    this.props.increment();
  }
 
  onDecrement() {
    this.props.decrement();
  }
 
  render() {
    return (
      <View>
        <Text >{this.props.count}</Text>
        <TouchableOpacity onPress={() => this.onIncrement()}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.onDecrement()}><Text>-</Text></TouchableOpacity>
      </View>
    );
  }
}

CounterRedux.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};


const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
