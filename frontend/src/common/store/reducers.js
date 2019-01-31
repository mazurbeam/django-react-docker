import { combineReducers } from 'redux';
import counter from './counter';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    counter,
    auth,
    router: connectRouter(history)
  });

export default rootReducer;
