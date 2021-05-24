import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';

function Login({ setValidated }) {
  return (
    <div className="Login">
      <div className="Left">
        <h1 id="learn">Welcome, Denizen of the Internet</h1>
        <p className="leftcontent">Login on the right hand side to be whisked away to a simple, but pure world of random Animal Crossing characters sharing their testimonials. Testimonials about what? We&apos;re not sure either.</p>
      </div>
      <div className="right">
        <div className="tryit">
          <p>
            <strong>Inane content</strong>
            <span> is just a login away!</span>
          </p>
        </div>
        <br />
        <Form setValidated={setValidated} />
      </div>
    </div>
  );
}

Login.propTypes = {
  setValidated: PropTypes.func.isRequired,
};

export default Login;
