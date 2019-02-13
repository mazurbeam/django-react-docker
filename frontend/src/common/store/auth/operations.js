import axios from 'axios';
// import {withAuth} from './selectors'
import actions from './actions';
import jwtDecode from 'jwt-decode';

import { withAuth, withUserID } from './selectors';

const login = (email, password) => async dispatch => {
  dispatch(actions.loginRequest());
  try {
    const res = await axios({
      method: 'post',
      url: `http://api.localhost/auth/token/`,
      data: JSON.stringify({
        username: email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      // withCredentials: true
    });
    console.log(res);
    localStorage.setItem('access', res.data.access);
    dispatch(actions.loginSuccess(res.data));
  } catch (error) {
    dispatch(actions.loginError(error));
  }
};

/* this function checks login and returns accountInfo if logged in */
const refreshAccessToken = token => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      url: `http://${process.env.RAZZLE_API_URL}/auth/token/refresh/`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        refresh: token
      }
    });
    console.log(res);
    dispatch(actions.tokenSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(actions.tokenFailure(error));
  }
};

const fetchAccountInfo = (id = 0) => async dispatch => {
  dispatch(actions.fetchAccountInfoRequest());
  try {
    console.log(localStorage.getItem('access'));
    // const access = jwtDecode(localStorage.getItem('access'));
    // console.log(access.user_id);
    const res = await axios({
      method: 'get',
      url: `http://api.localhost/v1/users/${id}`,
      headers: withAuth({
        'Content-Type': 'application/json'
      })
      // withCredentials: true
    });
    console.log(res);
    dispatch(actions.fetchAccountInfoSuccuess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(actions.fetchAccountInfoFailure(error));
  }
};

export default { login, refreshAccessToken, fetchAccountInfo };
