import 'react-native';
import React from 'react';
import Header from './';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Header />
  );
});
