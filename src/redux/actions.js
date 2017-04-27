// String Contstants

export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_POPULAR = 'SORT_POPULAR';
export const SORT_NEWEST = 'SORT_NEWEST';

// Function
export const updateVote = upvote => ({ type: UPDATE_VOTE, votes: upvote });

export const sortPopular = () => ({ type: SORT_POPULAR });

export const sortNewest = () => ({ type: SORT_NEWEST });
