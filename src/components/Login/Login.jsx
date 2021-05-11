import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import Left from '../Left/Left';
import Right from '../Right/Right';

function Login({ setTest }) {
  return (
    <div className="Login">
      <Left />
      <Right setTest={setTest} />
    </div>
  );
}

Login.propTypes = {
  setTest: PropTypes.func.isRequired,
};

export default Login;
