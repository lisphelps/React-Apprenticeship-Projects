import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import Left from '../Left/Left';
import Right from '../Right/Right';

function Login({ setValidated }) {
  return (
    <div className="Login">
      <Left />
      <Right setValidated={setValidated} />
    </div>
  );
}

Login.propTypes = {
  setValidated: PropTypes.func.isRequired,
};

export default Login;
