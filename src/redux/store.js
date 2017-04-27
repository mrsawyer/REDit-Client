import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { postsReducer } from './reducer';

export default createStore(
  combineReducers({
    posts: postsReducer
  }),
  /* eslint-disable no-underscore-dangle */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), /* eslint-enable */
  applyMiddleware(reduxLogger)
);
