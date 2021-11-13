import React from 'react';
import PropTypes from 'prop-types';

function Aside(props) {
  return (
    <h3>{props.text}</h3>
  );
}


Aside.propTypes = {
  text: PropTypes.string
}

export default Aside;
