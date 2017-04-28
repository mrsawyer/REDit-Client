import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';

import Week from '../../components/Week';
import { getWeeks } from '../../redux/actions';

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(getWeeks());
  }

  render() {
    return (
      <Drawer >
        <AppBar
          title="RED it"
          iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
        />
        <Week
        weeks={this.props.weeks}
        />
      </Drawer>
    );
  }
}

Categories.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    weeks: state.weeks,
  };
}

export default connect(mapStateToProps)(Categories);

