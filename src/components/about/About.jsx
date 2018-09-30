import React, { Fragment } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

const About = ({ datas }) => {
  const divs = datas.map(data => (
    <div key={data.id}>
      {data.description}
    </div>
  ));

  return (
    <Fragment>
      <h3>About me</h3>
      {divs}
    </Fragment>
  );
};

About.propTypes = {
  datas: arrayOf(shape({ id: number, description: string})).isRequired,
};

export { About as default };
