import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../api/Authentication';
import './Form.css';

function Form() {
  const history = useHistory();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  const validPW = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/i);

  const handleInputChange = (event, callback) => {
    callback(event.target.value);
  };
  const validateForm = () => {
    if (username && email && validEmail.test(email) && password && validPW.test(password)) {
      setIsLoggedIn(true);
      localStorage.setItem('user', username);
      history.push('/testimonials');
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
          onChange={(event) => handleInputChange(event, setUsername)}
          value={username}
          className={submitted && !username ? 'error' : null}
          placeholder="Name"
        />
        {submitted && !username ? <p id="oops">Name cannot be empty</p> : null}

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

export default Form;
