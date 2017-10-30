import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import container from './container';

const Editor = ({file: {children, name}}) => (
  <div className="Editor">
    <h3>
      {(children ?
          `${name} is a directory` :
          `Contents of ${name}`
      )}
    </h3>
  </div>
);

Editor.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
  }).isRequired,
};

export default container(Editor);
