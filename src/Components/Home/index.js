import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../Header';
import CounterRedux from '../CounterRedux';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header title="Crummy Cook recipes" />
        <CounterRedux />
      </View>
    );
  }
}
