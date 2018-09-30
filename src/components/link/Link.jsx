import React, { Fragment } from 'react';
import { objectOf, string } from 'prop-types';
import Table from '../table/Table';

const Link = ({ datas }) => (
  <Fragment>
    <h3>Contacts</h3>
    <Table datas={datas} />
  </Fragment>
);

Link.propTypes = {
  datas: objectOf(string).isRequired,
};

export { Link as default };
