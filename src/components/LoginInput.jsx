import React from 'react';
import PropTypes from 'prop-types';

const LoginInput = (props) => {
  return(
    <input type={props.inputType} value={props.text} onInput={e => props.changeloginText(e.target.value)} required placeholder={props.placeholder}/>
  )
}

LoginInput.propTypes = {
  changeloginText: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string
}

export default LoginInput;