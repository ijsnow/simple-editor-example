export const SET_CURRENT_PATH = 'SET_CURRENT_PATH';
export function setCurrentPath(path) {
  return {
    type: SET_CURRENT_PATH,
    payload: path,
  };
}
