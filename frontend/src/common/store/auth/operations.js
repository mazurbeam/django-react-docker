import axios from 'axios';

import actions from './actions';

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
    dispatch(actions.loginSuccess(res.data));
  } catch (error) {
    dispatch(actions.loginError(error));
  }
};

/* this function checks login and returns accountInfo if logged in */
const refreshAccessToken = () => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      url: `http://${process.env.RAZZLE_API_URL}/auth/token/refresh/`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    console.log(res);
    dispatch(actions.updateAccountInfo(res.data.message));
  } catch (error) {
    console.log(error);
  }
};

export default { login, refreshAccessToken };
