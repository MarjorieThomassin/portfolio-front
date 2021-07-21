import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginRequest } from '../context/loginContext';

function Admin() {
  const {
    loginRequest,
  } = useLoginRequest();

  if (loginRequest == null) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
        <h1>this is admin page</h1>
  );
}
export default Admin;
