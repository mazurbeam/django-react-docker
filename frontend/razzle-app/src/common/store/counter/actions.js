export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const set = value => ({
  type: SET_COUNTER,
  payload: value,
});

const increment = () => ({
  type: INCREMENT_COUNTER,
});

const decrement = () => ({
  type: DECREMENT_COUNTER,
});

const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
};

const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};

export default {
    set,
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync
}