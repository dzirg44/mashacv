import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
import Table from '../table/Table';

describe('<Link />', () => {
  const props = {
    datas: {
      Type: 'test',
    },
  };

  it('should be defined', () => {
    expect(Link).toBeDefined();
  });

  it('renders correctly', () => {
    const link = shallow(<Link {...props} />);

    expect(link).toMatchSnapshot();
  });

  it('renders h3', () => {
    const link = shallow(<Link {...props} />);
    const title = <h3>Links</h3>;

    expect(link.contains(title)).toEqual(true);
  });

  it('renders Table', () => {
    const link = shallow(<Link {...props} />);
    const table = <Table datas={props.datas} />;

    expect(link.contains(table)).toEqual(true);
  });
});
