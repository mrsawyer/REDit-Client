import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

class Welcome extends Component {
    render() {
        return (
        <div className={styles.welcome}>
            {this.props.children}
        </div>
        );
    }
}

Welcome.propTypes = {
    children: PropTypes.object,
};

export default Welcome;