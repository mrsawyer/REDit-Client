import {
  UPDATE_VOTE,
  SORT_POPULAR,
  SORT_NEWEST,
  GET_WEEKS,
  GET_POSTS
} from './actions';

import { data } from '../mock-data';

const initialData = data;

export function PostsReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return [...state, { posts: action.posts }];
    case SORT_POPULAR:
      return [...state].sort((a, b) => b.votes - a.votes);
    case SORT_NEWEST:
      return [...state].sort((a, b) => b.id - a.id);
    case UPDATE_VOTE:
      return state.map(post => {
        if (action.postId === post.id) post.votes++;
        return post;
      })
    default:
      return state;
  }
}

export function WeeksReducer(state = [], action) {
  switch (action.type) {
    case GET_WEEKS:
      return [...state, { weeks: action.weeks }];
    default:
      return state;
  }
}

