import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateVote, sortPopular, sortNewest } from '../../redux/actions';
import PostList from './PostList';
import { getPosts } from '../../redux/actions';

class PostListContainer extends Component {
  constructor() {
    super();

    this.updateVote = this.updateVote.bind(this);
    this.sortPopular = this.sortPopular.bind(this);
    this.sortNewest = this.sortNewest.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.lesson_id !== this.props.match.params.lesson_id)
      this.props.dispatch(getPosts(nextProps.match.params.lesson_id));
  }

  updateVote(postId) {
    this.props.dispatch(updateVote(postId));
  }

  sortPopular() {
    this.props.dispatch(sortPopular());
  }

  sortNewest() {
    this.props.dispatch(sortNewest());
  }


  render() {
    return (
      <PostList
        posts={this.props.posts}
        updateVote={this.updateVote}
        sortPopular={this.sortPopular}
        sortNewest={this.sortNewest}
      />
    );
  }
}

PostListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(PostListContainer);
