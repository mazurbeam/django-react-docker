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

const fetchAccountInfoRequest = info => ({
  type: types.ACCOUNT_INFO_REQUEST
});

const fetchAccountInfoSuccuess = info => ({
  type: types.ACCOUNT_INFO_SUCCESS,
  payload: info
});

const fetchAccountInfoFailure = error => ({
  type: types.ACCOUNT_INFO_FAILURE,
  payload: error
});

const tokenRequest = () => ({
  type: types.TOKEN_REQUEST
});

const tokenSuccess = data => ({
  type: types.TOKEN_RECEIVED,
  payload: data
});

const tokenFailure = error => ({
  type: types.TOKEN_FAILURE,
  payload: error
});

export default {
  loginRequest,
  loginSuccess,
  loginError,
  updateAccountInfo,
  fetchAccountInfoRequest,
  fetchAccountInfoSuccuess,
  fetchAccountInfoFailure,
  tokenRequest,
  tokenSuccess,
  tokenFailure
};
