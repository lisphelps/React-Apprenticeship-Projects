import React from 'react'
import { useState } from 'react';
import './Form.css'

function Form() {
    const [values, setValues] = useState({
        first: "",
        last: "",
        email: "",
        password: "",
      });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleFirstInputChange = (event) => {
        setValues({...values, first: event.target.value})
    }
    const handleLastInputChange = (event) => {
        setValues({...values, last: event.target.value})
    }
    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }
    const handlePwInputChange = (event) => {
        setValues({...values, password: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }
    const validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return (
        <div className="FormContainer">
            <form className="login" onSubmit={handleSubmit}>
                <input 
                onChange={handleFirstInputChange}
                value={values.first}
                className="first"
                placeholder="First Name"
                />{submitted && !values.first ? <span id="oops">First Name cannot be empty</span> : null}
                <input
                onChange={handleLastInputChange}
                value={values.last}
                className="last"
                placeholder="Last Name"
                />{submitted && !values.last ? <span id="oops">Last Name cannot be empty</span> : null}
                <input 
                onChange={handleEmailInputChange}
                value={values.email}
                className="email"
                placeholder="Email"
                />{submitted && !values.email ? <span id="oops">Please enter an email address</span> : null}
                 {submitted && values.email && !validEmail.test(values.email) ? <span>Looks like this is not an email</span>: null}
                <input 
                onChange={handlePwInputChange}
                value={values.password}
                type="password"
                className="password"
                placeholder="Password"
                />{submitted && !values.password ? <span id="oops">Password cannot be empty</span> : null}
                <br />
                <button id="submit" type="submit" onSubmit={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
                <br />
                <span className="disclaimer">By clicking the button, you are agreeing to our <a href="index.html">Terms and Services</a></span>
            </form>
        </div>

    )
} 

export default Form