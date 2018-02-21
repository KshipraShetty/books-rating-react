import { createStore } from 'redux';

const storeState = (reducer) => {
  const store = createStore(reducer);
  return store;
};

export default storeState;
