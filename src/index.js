import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga';
import RouterWithNavState from './routes';
import rootSaga from './actions/sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const store = createStore(reducers, {}, applyMiddleware(middleware, sagaMiddleware));
store.runSaga = sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithNavState />
      </Provider>
    );
  }
}
