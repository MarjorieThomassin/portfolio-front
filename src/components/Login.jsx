import React, { useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

import { useLoginRequest } from '../context/loginContext';

function Login() {
  const [isClicked, setIsClicked] = useState();

  const emailInput = useRef();
  const passwordInput = useRef();
  const {
    setLoginRequest,
  } = useLoginRequest();

  const history = useHistory();

  const handleSubmit = () => {
    const url = 'http://localhost:8000/login';
    axios.post(url, {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then((response) => {
        setLoginRequest(response.data);
        if (response.data != null) {
          history.push('/admin');
        }
      });
  };
  return (
    <div className="adminFormContainer">
            <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="loginForm"
      >
        <label className="loginEmail" htmlFor="email">
          <input className="input" ref={emailInput} type="email" id="email" placeholder="your email or username" required />
        </label>
        <label className="loginPassword" htmlFor="password" id="password">
          <input className="input" ref={passwordInput} type="password" placeholder="your password" required />
        </label>
        <div className="btnLogin">
        <button
            className="loginButton"
            value="submit"
            type="submit"
          >
            Submit
          </button>
          <button className="loginButton" type="submit" onClick={() => setIsClicked(true)}>
            {isClicked
             && <Redirect to="/" />}
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
