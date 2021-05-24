import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ setValidated }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  const validPW = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/i);

  const handleInputChange = (event, callback) => {
    callback(event.target.value);
  };
  const validateForm = () => {
    if (name && email && validEmail.test(email) && password) {
      setValidated(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    validateForm();
  };

  return (
    <div className="FormContainer">
      <form className="login" onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleInputChange(event, setName)}
          value={name}
          className={submitted && !name ? 'error' : null}
          placeholder="Name"
        />
        {submitted && !name ? <p id="oops">Name cannot be empty</p> : null}

        <input
          onChange={(event) => handleInputChange(event, setEmail)}
          value={email}
          className={(submitted && !email) || (submitted && !validEmail.test(email)) ? 'error' : null}
          placeholder="Email"
        />
        {
          submitted && !validEmail.test(email) && (
            <p id="oops">
              {!email ? 'Please enter an email address' : 'Looks like this is not a valid email'}
            </p>
          )
        }

        <input
          onChange={(event) => handleInputChange(event, setPassword)}
          value={password}
          type="password"
          className={(submitted && !password) || (submitted && !validPW.test(password)) ? 'error' : null}
          placeholder="Password"
        />
        {
          submitted && !validPW.test(password) && (
            <p id="oops">
              {!password ? 'Please enter your password' : 'Please enter a valid password containing upper and lowercase letters, a number, and a special character'}
            </p>
          )
        }

        <button id="submit" type="submit" onSubmit={handleSubmit}>Login</button>
        <br />
        <span className="disclaimer">
          By clicking the login button, you are agreeing to
          <a href="index.html"> sell us your soul </a>
          at current market value.
        </span>
        <br />
        <br />
      </form>
    </div>
  );
}

Form.propTypes = {
  setValidated: PropTypes.func.isRequired,
};

export default Form;
