function accessToken(state) {
  if (state.access) {
    return state.access.token;
  }
}

function refreshToken(state) {
  if (state.refresh) {
    return state.refresh.token;
  }
}

function isAccessTokenExpired(state) {
  if (state.access && state.access.exp) {
    return 1000 * state.access.exp - new Date().getTime() < 5000;
  }
  return true;
}
function isRefreshTokenExpired(state) {
  if (state.refresh && state.refresh.exp) {
    return 1000 * state.refresh.exp - new Date().getTime() < 5000;
  }
  return true;
}
function isAuthenticated(state) {
  return !isRefreshTokenExpired(state);
}

function userId(state) {
  return state.access;
}
function authErrors(state) {
  return state.errors;
}

export function withAuth(headers = {}) {
  return {
    ...headers,
    Authorization: `Bearer ${localStorage.getItem('access')}`
  };
}

export function withUserID() {
  return state => userId(state.auth);
}

export default {
  accessToken,
  refreshToken,
  isAccessTokenExpired,
  isRefreshTokenExpired,
  isAuthenticated,
  userId,
  authErrors
};
