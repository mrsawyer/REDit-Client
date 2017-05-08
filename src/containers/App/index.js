import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Categories from '../../containers/Categories';

import styles from './styles.css';

class App extends Component {

  componentWillMount() {
    // if (!this.props.loginStatus.login) {
    //   browserHistory.push('/login');
    // }
  }
  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
        <Categories />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.obj,
};

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus.login,
  };
}

export default connect(mapStateToProps)(App);
