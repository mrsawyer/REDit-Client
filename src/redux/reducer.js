import {
  UPDATE_VOTE,
  SORT_POPULAR,
  SORT_NEWEST,
  GET_WEEKS,
  GET_POSTS,
  LOGIN_SUCCESS
} from './actions';

export function PostsReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      const newPosts = action.payload.posts
      return newPosts;
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
      const newWeeks = action.payload.weeks
      return newWeeks;
    default:
      return state;
  }
}

export function LoginReducer(state = {login: false}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log(state);
      if(action.payload) {
        let login = true;
        return {...state, login};
      }
      }
    default:
      return state;
  }
}


