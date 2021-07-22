import React from 'react';
import { useProject } from '../context/ProjectContext';
import Project from './Project.jsx';

function ProjectDisplay() {
  const { displayProject } = useProject();

  return (
    <div className="projectContainer">
      { displayProject && displayProject.map((project) => (
        <Project key={project.id} Project={project} />
      ))}
    </div>
  );
}

export default ProjectDisplay;
