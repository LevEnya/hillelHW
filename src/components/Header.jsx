import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <h1>{props.text}</h1>
  );
}


Header.propTypes = {
  text: PropTypes.string
}

export default Header;
