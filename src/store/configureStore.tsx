import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { Test } from './types/index';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});
export default function () {
  const store = createStore<Test>(enthusiasm, initialState,composeEnhancers());
  return store;
}