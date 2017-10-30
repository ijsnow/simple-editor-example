import {connect} from 'react-redux';

export default connect(({currentPath, files}) => {
  let list = files,
    file = null;
  const pathFiles = [];

  currentPath.forEach((fileIdx, idx) => {
    const curr = list[fileIdx];
    curr.parent = file;
    curr.path = currentPath.slice(0, idx + 1);

    file = list[fileIdx];
    list = file.children;

    pathFiles.push(file);
  });

  return {
    file,
    pathFiles,
  };
});
