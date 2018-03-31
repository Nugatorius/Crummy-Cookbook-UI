import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import RouterWithNavState from './routes';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const store = createStore(reducers, {}, applyMiddleware(middleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithNavState />
      </Provider>
    );
  }
}
