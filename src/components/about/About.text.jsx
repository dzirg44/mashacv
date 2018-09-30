import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import List from '../list/List';

describe('<About />', () => {
  const props = {
    datas: [
      { id: 1, description: 'Chernihiv University' },
    ],
  };

  it('should be defined', () => {
    expect(About).toBeDefined();
  });

  it('renders correctly', () => {
    const about = shallow(<About {...props} />);

    expect(about).toMatchSnapshot();
  });

  it('renders h3', () => {
    const about = shallow(<About {...props} />);
    const title = <h3>About</h3>;

    expect(about.contains(title)).toEqual(true);
  });

  it('renders List', () => {
    const about = shallow(<About {...props} />);

    expect(about.find(List).length).toBeGreaterThan(0);
  });
});
