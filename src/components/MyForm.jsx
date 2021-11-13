import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoginInput from './LoginInput'
import SubmitButton from './SubmitButton'

const MyForm = (props) => {

  const [loginText, changeloginText] = useState("");
  const [password, setPasswordText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log('here')
    props.setAutUser(true);
  }

  return(
    <form onSubmit={handleSubmit}>
      <LoginInput text={loginText} changeloginText={changeloginText} inputType="text" placeholder="input login"/>
      <LoginInput text={password} changeloginText={setPasswordText} inputType="password" placeholder="input password"/>
      <SubmitButton/>
    </form>
  )
}

MyForm.propTypes = {
  setAutUser: PropTypes.func.isRequired,
}

export default MyForm;