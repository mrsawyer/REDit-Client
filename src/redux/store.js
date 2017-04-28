import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import { PostsReducer, WeeksReducer } from './reducer';

export default createStore(
  combineReducers({
    posts: PostsReducer,
    weeks: WeeksReducer
  }),
  /* eslint-disable no-underscore-dangle */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), /* eslint-enable */
  applyMiddleware(thunk)
);
