import React from 'react';
import PropTypes from 'prop-types';

import PostToolbar from '../../components/PostToolbar';
import Post from '../../components/Post';


const PostList = ({ posts, updateVote, sortNewest, sortPopular }) => {
  return (
    <div>
      <div style={{ marginLeft: '256px' }}>
        <PostToolbar
          sortPopular={sortPopular}
          sortNewest={sortNewest}
        />
        <div style={{ margin: '10px' }}>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
              updateVote={updateVote}
            />
          ))}
          </div>
      </div>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arr,
  updateVote: PropTypes.func,
  sortNewest: PropTypes.func,
  sortPopular: PropTypes.func
};

export default PostList;
