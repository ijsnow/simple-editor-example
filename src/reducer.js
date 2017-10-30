import {SET_CURRENT_PATH} from './actions';

const initialState = {
  currentPath: [2],
  files: [
    {
      name: 'folder 1',
      children: [
        {
          name: 'folder 2',
          children: [
            {
              name: 'file 3',
            },
          ],
        },
        {
          name: 'file 2',
        },
      ],
    },
    {
      name: 'folder 3',
      children: [
        {
          name: 'folder 4',
          children: [
            {
              name: 'file 5',
            },
          ],
        },
        {
          name: 'file 4',
        },
      ],
    },
    {
      name: 'file 1',
    },
  ],
};

const HANDLERS = {
  [SET_CURRENT_PATH]: (state, {payload}) => ({
    ...state,
    currentPath: payload,
  }),
};

function reducer(state = initialState, action) {
  const handler = HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer;
