import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

class Login extends Component {
  render() {
    return (
      <div className={styles.login}>
        {this.props.children}
      </div>
    );
  }
}

Login.propTypes = {
  children: PropTypes.object,
};

export default Login;
