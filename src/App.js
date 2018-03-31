/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Header from './Components/Header';
import CounterRedux from './Components/CounterRedux';
const store = createStore(reducers, {});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header title="Crummy Cook recipes" />
          <CounterRedux />
        </View>
      </Provider>
    );
  }
}
