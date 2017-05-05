// String Contstants

export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_POPULAR = 'SORT_POPULAR';
export const SORT_NEWEST = 'SORT_NEWEST';
export const GET_POSTS = 'GET_POSTS';
export const GET_WEEKS = 'GET_WEEKS';


// Function
export const updateVote = postId => ({ type: UPDATE_VOTE, postId });

export const sortPopular = () => ({ type: SORT_POPULAR });

export const sortNewest = () => ({ type: SORT_NEWEST });

export const getPosts = (postId) => {
  return function (dispatch) {
      fetch(`http://localhost:3001/api/lessons/${postId}/posts`)
            .then(
            (response) => {
              if(!response.ok) return Promise.reject('Could not get posts');
              return response.json();
            }
            )
            .then((json) => {
              console.log(json)
              dispatch({
                type: GET_POSTS,
                payload: {
                  posts: json
                }
              });
    });
  }
}

export const getWeeks = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/weeks')
        .then(
          (response) => {
            if(!response.ok) return Promise.reject('Could not get weeks');
            return response.json();
          })
        .then((json) => {
          console.log(json)
          dispatch({
            type: GET_WEEKS,
            payload: {
              weeks: json
            }
          });
        });
  }
}
