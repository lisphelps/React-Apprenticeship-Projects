import React, { useState } from 'react';

import './Form.css';

function Form() {
  const [values, setValues] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstInputChange = (event) => {
    setValues({ ...values, first: event.target.value });
  };
  const handleLastInputChange = (event) => {
    setValues({ ...values, last: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePwInputChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  return (
    <div className="FormContainer">
      <form className="login" onSubmit={handleSubmit}>
        <input
          onChange={handleFirstInputChange}
          value={values.first}
          className={submitted && !values.first ? 'error' : null}
          placeholder="First Name"
        />
        {submitted && !values.first ? <p id="oops">First Name cannot be empty</p> : null}

        <input
          onChange={handleLastInputChange}
          value={values.last}
          className={submitted && !values.last ? 'error' : null}
          placeholder="Last Name"
        />
        {submitted && !values.last ? <p id="oops">Last Name cannot be empty</p> : null}

        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className={(submitted && !values.email) || (submitted && !validEmail.test(values.email)) ? 'error' : null}
          placeholder="Email"
        />
        {submitted && !values.email ? <p id="oops">Please enter an email address</p> : null}
        {submitted && values.email && !validEmail.test(values.email) ? <p id="oops">Looks like this is not an email</p> : null}

        <input
          onChange={handlePwInputChange}
          value={values.password}
          type="password"
          className={submitted && !values.password ? 'error' : null}
          placeholder="Password"
        />
        {submitted && !values.password ? <p id="oops">Password cannot be empty</p> : null}

        <button id="submit" type="submit" onSubmit={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
        <br />
        <span className="disclaimer">
          By clicking the button, you are agreeing to our
          <a href="index.html">Terms and Services</a>
        </span>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Form;
