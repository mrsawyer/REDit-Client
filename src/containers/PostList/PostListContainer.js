import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateVote, sortPopular, sortNewest } from '../../redux/actions';
import PostList from './PostList';

import './styles.css';

class PostListContainer extends Component {
  // constructor() {
  //   super();

  //   this.updateVote = this.updateVote.bind(this);
  //   this.sortPopular = this.sortPopular.bind(this);
  //   this.sortNewest = this.sortNewest.bind(this);

  //   this.state={
  //     posts: data.posts,
  //     orderby: 'newest'
  //   }
  // }

  updateVote(post) {
    const upVote = post.votes + 1;
    this.props.dispatch(updateVote(upVote));
    // let moreVotes = post.votes++;
    // this.setState({
    //   votes: moreVotes
    // });
  }

  sortPopular() {
    this.props.dispatch(sortPopular());
    // let sortedPosts = posts.sort(function (a, b) {
    //   return b.votes - a.votes;
    // });
    // this.setState({
    //   orderby: 'popular',
    //   posts: sortedPosts
    // })
  }

  sortNewest() {
    this.props.dispatch(sortNewest());
    // let sortedPosts = posts.sort(function (a, b) {
    //   return b.id - a.id;
    // });
    // this.setState({
    //   orderby: 'newest',
    //   posts: sortedPosts
    // });
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
