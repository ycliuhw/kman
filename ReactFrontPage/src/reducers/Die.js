import Immutable from 'immutable';

import { createReducer } from './utils';
import {
  DO_DIE_DONE
} from '../actions/Die';

export const initialState = Immutable.fromJS({
  k: '',
  result: ''
});

export default createReducer(initialState, {
  [DO_DIE_DONE]: (state, payload) => {
    const { input, output } = payload;
    return state
      .set('k', input)
      .set('result', output);
  }
});
