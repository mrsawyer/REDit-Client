import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <AppBar
    style={{width:'100%', alignSelf:'flex-start'}}
    iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
    iconElementRight={
      <div>
        <FlatButton style={{color: 'white'}} label="Share a New Link"/>
        <Link to={`/login`}><FlatButton style={{color: 'white'}} label="Login" /></Link>
      </div>
      }
  />
  );
};

export default HeaderBar;
