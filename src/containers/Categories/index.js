import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';

import Week from '../../components/Week';

import styles from './styles.css';

class Categories extends Component {
  render() {
    return (
      <Drawer >
        <AppBar
          title="RED it"
          iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
        />
        <Week />
      </Drawer>
    );
  }
}

Categories.propTypes = {
  children: PropTypes.object,
};

export default Categories;