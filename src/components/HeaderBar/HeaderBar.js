import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () => {
  return (
    <AppBar 
    style={{width:'100%', alignSelf:'flex-start'}}
    iconElementRight={
      <div>
        <FlatButton style={{color: 'white'}} label="Share a New Link"/>
        <FlatButton style={{color: 'white'}} label="Logout" />
      </div>
      }
  />
  );
};

export default HeaderBar;