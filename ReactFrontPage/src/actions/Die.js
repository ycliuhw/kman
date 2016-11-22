import { get } from '../remote';

const prefix = 'die/';

export const DO_DIE_DONE = `${prefix}DO_DIE_DONE`;


export function doDie (k) {
  const url = `http://localhost:8000/api/v1/die/${k}`;
  return dispatch => {
    return get(url).then(json => {
      console.debug(`doDie then -> `, json);
      dispatch(doDieDone(json));
    });
  };
}

export function doDieDone (result) {
  return {
    type: DO_DIE_DONE,
    payload: result
  };
}
