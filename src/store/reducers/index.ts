import { combineReducers } from 'redux';

import Auth from './auth';
import Schedule from "./schedule";

export default combineReducers({
  Auth, Schedule,
});
