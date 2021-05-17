import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

function Form({ setTest }) {
  const [submitted, setSubmitted] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  const handleInputChange = (event, callback) => {
    callback(event.target.value);
  };
  const validateForm = () => {
    if (first && last && email && validEmail.test(email) && password) {
      setTest(true);
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
          onChange={(event) => handleInputChange(event, setFirst)}
          value={first}
          className={submitted && !first ? 'error' : null}
          placeholder="First Name"
        />
        {submitted && !first ? <p id="oops">First Name cannot be empty</p> : null}

        <input
          onChange={(event) => handleInputChange(event, setLast)}
          value={last}
          className={submitted && !last ? 'error' : null}
          placeholder="Last Name"
        />
        {submitted && !last ? <p id="oops">Last Name cannot be empty</p> : null}

        <input
          onChange={(event) => handleInputChange(event, setEmail)}
          value={email}
          className={(submitted && !email) || (submitted && !validEmail.test(email)) ? 'error' : null}
          placeholder="Email"
        />
        {
          submitted && !validEmail.test(email) && (
            <p id="oops">
              {!email ? 'Please enter an email address' : 'Looks like this is not an email'}
            </p>
          )
        }

        <input
          onChange={(event) => handleInputChange(event, setPassword)}
          value={password}
          type="password"
          className={submitted && !password ? 'error' : null}
          placeholder="Password"
        />
        {submitted && !password ? <p id="oops">Password cannot be empty</p> : null}

        <button id="submit" type="submit" onSubmit={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
        <br />
        <span className="disclaimer">
          By clicking the button, you are agreeing to our
          <a href="index.html"> Terms and Services</a>
        </span>
        <br />
        <br />
      </form>
    </div>
  );
}

Form.propTypes = {
  setTest: PropTypes.func.isRequired,
};

export default Form;
