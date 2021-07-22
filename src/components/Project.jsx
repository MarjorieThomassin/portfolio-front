import React from 'react';
import PropTypes from 'prop-types';

function Project({ project }) {
  return (
    <div className="projectList">
      <p className="projectDescription">
        <span className="descritpionProject">Name :</span>
        {' '}
        {project.nameProject}
        <br />
        <span className="descriptionProject">Du :</span>
        {' '}
        {project.startedAt}
        <br />
        <span className="descriptionProject">Au :</span>
        {' '}
        {project.endedAt}
        <br />
        <span className="descriptionProject">Description :</span>
        {' '}
        {project.description}
        <br />
        <span className="descriptionProject">Lien :</span>
        {' '}
        {project.link}
      </p>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameProject: PropTypes.string.isRequired,
    startedAt: PropTypes.string.isRequired,
    endedAt: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.element.isRequired,
  }),

};
Project.defaultProps = {
  project: undefined,
};
export default Project;
