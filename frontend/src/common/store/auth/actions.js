import types from './types';

const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  payload: data
});

const loginError = error => ({
  type: types.LOGIN_FAILURE,
  payload: error
});

const updateAccountInfo = info => ({
  type: types.ACCOUNT_INFO_STORE,
  payload: info
});

export default {
  loginRequest,
  loginSuccess,
  loginError,
  updateAccountInfo
};
