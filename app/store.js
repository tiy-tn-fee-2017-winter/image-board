import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Vue from 'vue';
import Revue from 'revue';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = { posts: [] };

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default new Revue(Vue, store);
