import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

class CreatePost extends Component {
  render() {
    return (
      <div className={styles.create}>
        {this.props.children}
      </div>
    );
  }
}

CreatePost.propTypes = {
  children: PropTypes.object,
};

export default CreatePost;