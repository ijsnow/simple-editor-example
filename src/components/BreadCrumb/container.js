import {compose} from 'redux';

import withCurrentFile from '../../containers/withCurrentFile';
import withSetCurrentPath from '../../containers/withSetCurrentPath';

export default compose(
  withCurrentFile,
  withSetCurrentPath,
);
