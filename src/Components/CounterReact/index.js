import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Counter extends Component {

  state = {
    counter: 0
  }

  increment() {
    let count = this.state.counter;
    this.setState({
      counter: count + 1
    });
  }

  decrement() {
    let count = this.state.counter;
    this.setState({
      counter: count - 1
    });
  }

  render() {
    return (
      <View>
        <Text>Counter Example with React</Text>
        <Text >{this.state.counter}</Text>
        <TouchableOpacity onPress={() => this.increment()}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.decrement()}><Text>-</Text></TouchableOpacity>
      </View>
    );
  }
}

export default Counter;
