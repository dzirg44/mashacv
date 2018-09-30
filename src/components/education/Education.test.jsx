import React from 'react';
import { shallow } from 'enzyme';
import Education from './Education';
import List from '../list/List';

describe('<Education />', () => {
  const props = {
    datas: [
      { id: 1, description: 'Chernihiv National Technological University, Chernihiv (2010 - 2014)', items: ['Specialized computer systems'] },
    ],
  };

  it('should be defined', () => {
    expect(Education).toBeDefined();
  });

  it('renders correctly', () => {
    const education = shallow(<Education {...props} />);

    expect(education).toMatchSnapshot();
  });

  it('renders h3', () => {
    const education = shallow(<Education {...props} />);
    const title = <h3>Education</h3>;

    expect(education.contains(title)).toEqual(true);
  });

  it('renders List', () => {
    const education = shallow(<Education {...props} />);

    expect(education.find(List).length).toBeGreaterThan(0);
  });
});
