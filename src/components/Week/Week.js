import React from 'react';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { data } from '../../mock-data';

const Week = () => {
  return (
    <div>
      {data.weeks.map(week => (
        <div>
          <List>
            <Subheader>{week.title}</Subheader>
            <Divider />
            {week.categories.map(cat => (
              <ListItem primaryText={cat} />
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

export default Week;
