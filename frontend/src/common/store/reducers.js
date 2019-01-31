import { combineReducers } from 'redux';
import counter from './counter';
import auth from './auth';
// import { connectRouter } from 'connected-react-router';

export default combineReducers({
  counter,
  auth
  // router: connectRouter(history)
});
