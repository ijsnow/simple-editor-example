import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import container from './container';

import FileTree from '../FileTree';
import BreadCrumb from '../BreadCrumb';
import Editor from '../Editor';

const App = ({files}) => (
  <div className="App">
    <div className="top">
      <BreadCrumb />
    </div>
    <div className="left">
      <FileTree files={files} />
      <Editor />
    </div>
  </div>
);

App.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
  })).isRequired,
};

export default container(App);
