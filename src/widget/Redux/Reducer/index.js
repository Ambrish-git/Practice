import { combineReducers } from 'redux';
import counterReducer from './reducer';

const counterApp = combineReducers({
  counterReducer
})

export default counterApp