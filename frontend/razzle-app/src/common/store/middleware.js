import { authActions, authOperations, authSelectors } from './auth';

export const authMiddleware = store => next => {
  const postponedActions = [];

  return action => {
    if (!action.promise) {
      return next(action);
    }
    const nextCheckPostponed = nextAction => {
      // Run postponed actions after token refresh
      if (nextAction.type === authActions.TOKEN_RECEIVED) {
        next(nextAction);
        postponedActions.forEach(postponed => next(postponed));
      } else {
        next(nextAction);
      }
    };

    const state = store.getState();
    const token = authSelectors.refreshToken(state.auth);
    if (token && authSelectors.isAccessTokenExpired(state.auth)) {
      postponedActions.push(action);
      if (postponedActions.length === 1) {
        return nextCheckPostponed(authOperations.refreshToken(token));
      } else {
        return;
      }
    }
    return next(action);
  };
};
