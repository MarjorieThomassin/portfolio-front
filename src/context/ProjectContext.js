import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import { useLoginRequest } from './loginContext';

const ProjectContext = createContext();

function ProjectProvider({ children }) {
  // const { loginRequest } = useLoginRequest();

  const [displayProject, setDisplayProject] = useState([]);

  // React.useEffect(() => {
  //   if (loginRequest != null) {
  //     const url = `${process.env.REACT_APP_API_URL}/users/${loginRequest.adminId}/bottles`;
  //     axios.get(url)
  //       .then((response) => (setDisplayProject(response.data)));
  //   }
  // }, [loginRequest]);

  return (
    <ProjectContext.Provider value={{ displayProject, setDisplayProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

ProjectProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useProject = () => useContext(ProjectContext);

export { ProjectProvider, useProject };
