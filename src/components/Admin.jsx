import axios from 'axios';
import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginRequest } from '../context/loginContext';
import { useProject } from '../context/ProjectContext';
import '../css/Admin.css';

function Admin() {
  const { loginRequest } = useLoginRequest();
  const { setDisplayProject } = useProject();

  const nameInput = useRef();
  const startedInput = useRef();
  const endedInput = useRef();
  const descriptionInput = useRef();
  const linkInput = useRef();

  const submitProject = () => {
    const url = 'http://localhost:8000/project';
    axios.post(url, {
      nameProject: nameInput.current.value,
      startedAt: startedInput.current.value,
      endedAt: endedInput.current.value,
      description: descriptionInput.current.value,
      link: linkInput.current.value,
    })
      .then((response) => {
        setDisplayProject((previousProject) => ([response.data, ...previousProject]));
      });
  };

  if (loginRequest == null) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
        <div className="adminContainer">
          <form className="formAdmin">
            <input className="inputAdmin" ref={nameInput} type="name" placeholder="project name" />
            <input className="inputAdmin" type="file" placeholder="image project" />
            <input className="inputAdmin" ref={startedInput} type="date" placeholder="started at" />
            <input className="inputAdmin" ref={endedInput} type="date" placeholder="ended at" />
            <input className="inputAdmin" ref={descriptionInput} type="text" placeholder="description" />
            <input className="inputAdmin" ref={linkInput} type="link" placeholder="link of the project" />
          <button className="buttonAdmin"
          type="submit"
          value="submit"
          onClick={() => {
            submitProject();
          }}
          >Submit
          </button>
          </form>
        </div>
  );
}
export default Admin;
