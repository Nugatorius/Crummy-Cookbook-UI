import 'react-native';
import { Text, View } from 'react-native';
import React from 'react';
import Header from '../';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Header/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should render 1 text component', () => {
    const wrapper = shallow(<Text/>);
    expect(wrapper).toHaveLength(1);
  });
  it('it should render 1 view component', () => {
    const wrapper = shallow(<View/>);
    expect(wrapper).toHaveLength(1);
  });
  it('it should render title as hello when given prop', () => {
    const wrapper = shallow(<Header title='hello'/>);
    expect(wrapper.props().children.props.children).toBe('hello');
  });
});
