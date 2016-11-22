import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// import visibilityFilter from '../../../imports/client/reducers/visibilityFilter';
import Die from './Die';


const rootReducer = combineReducers({
  form: formReducer,
  Die
});

export default rootReducer;
