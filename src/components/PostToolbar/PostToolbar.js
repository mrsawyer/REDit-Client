import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const PostToolbar = ({ sortNewest, sortPopular }) => {
  return (
    <div style={{background: '#e8e8e8', color:'#8b8b8b'}}>
      <AppBar
        title="Posts"
        titleStyle={{color:'#8b8b8b', fontSize:'1.25rem'}}
        zDepth={0}
        showMenuIconButton={false}
        style={{background: '#e8e8e8', color:'#8b8b8b'}}
        iconElementRight={
          <div>
            <span>Sort:</span>
            <FlatButton style={{color: 'black'}} label="Newest" onTouchTap={() => { sortNewest() }}/>
            <FlatButton style={{color: 'black'}} label="Popular" onTouchTap={() => { sortPopular() }} />
          </div>
        }
      />
    </div>
  );
};

export default PostToolbar;