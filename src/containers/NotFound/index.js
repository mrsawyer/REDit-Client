import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

class NotFound extends Component {
  render() {
    return (
      <div className={styles.found}>
        Not Found
      </div>
    );
  }
}

export default NotFound;