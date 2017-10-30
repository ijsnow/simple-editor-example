import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import container from './container';

const rightArrow = '\u02C3';

const BreadCrumb = ({pathFiles, setCurrentPath}) => (
  <div className="BreadCrumb">
    <span>Cool Project</span>
    <div className="crumbs">
      {pathFiles.map(({name, path}) => (
        <button
          className="crumb"
          onClick={() => setCurrentPath(path)}
        >
          <span className="arrow">{rightArrow}</span>
          <span className="name">{name}</span>
        </button>
      ))}
    </div>
  </div>
);

BreadCrumb.propTypes = {
  pathFile: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.name,
    path: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default container(BreadCrumb);
