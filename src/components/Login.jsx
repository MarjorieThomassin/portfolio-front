import React, { useRef } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

import { useLoginRequest } from '../context/loginContext';

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const {
    loginRequest, setLoginRequest,
  } = useLoginRequest();

  if (loginRequest != null) {
    return (
      <a href="/admin" />
    );
  }

  return (
    <div className="adminFormContainer">
      <form
        className="loginForm"
      >
        <label className="loginEmail" htmlFor="email">
          <input className="inputLogin" ref={emailInput} type="email" id="email" placeholder="your email or username" required />
        </label>
        <label className="loginPassword" htmlFor="password" id="password">
          <input className="inputLogin" ref={passwordInput} type="password" placeholder="your password" required />
        </label>
        <div className="btnLogin">
          <button
            className="loginButton"
            value="submit"
            type="submit"
            onClick={() => {
              const url = 'http://localhost:8000/login';
              axios.post(url, {
                email: emailInput.current.value,
                password: passwordInput.current.value,
              })
                .then((response) => {
                  setLoginRequest(response.data);
                });
            }}
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
