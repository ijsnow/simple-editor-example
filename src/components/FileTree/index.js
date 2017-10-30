import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-simple-accordion';

import container from './container';

import './styles.css';

const rightArrow = '\u02C3';
const downArrow = '\u02C5';

const FileTree = container(({
  prefixPath,
  files,
  onFileClick,
  setCurrentPath,
}) => (
  <Accordion
    list={files}
    className="FileTree"
    groupClassName="li"
  >
    {({props: {name, children}, index, isOpen}) => ({
      header: () => (children ? (
        <div className="fs-item">
          {name}
          {children && <span>{isOpen ? downArrow : rightArrow}</span>}
        </div>
      ) : (
        /**
         * I know, I know, binding in render can slow things down.
         * This is just an example and I'm feeling kinda lazy.
         */
        <button onClick={() => setCurrentPath(prefixPath.concat(index))}>
          {name}
        </button>
      )),
      body: () => children ? (
        <FileTree
          files={children}
          prefixPath={prefixPath.concat(index)}
        />
      ) : null,
    })}
  </Accordion>
));

FileTree.propTypes = {
  prefixPath: PropTypes.arrayOf(PropTypes.number),
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
  })).isRequired,
  setCurrentPath: PropTypes.func.isRequired,
};

FileTree.defaultProps = {
  prefixPath: [],
};

export default FileTree;
