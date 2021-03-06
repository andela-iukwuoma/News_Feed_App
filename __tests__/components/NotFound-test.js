import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/NotFound.jsx';
jest.dontMock('../../src/components/NotFound.jsx');

describe('NotFound component', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.contains('404: Page not found')).toBe(true);
    expect(wrapper.contains('We are sorry but the page you are looking for does not exist.')).toBe(true);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});
