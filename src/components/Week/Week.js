import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const Week = ({ weeks }) => {
  return (
    <div>
      {weeks.map(week => (
        <div>
          <List>
            <Subheader>{week.title}</Subheader>
            <Divider />
            {week.lessons.map(lesson => (
              <ListItem primaryText={lesson.title} />
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

Week.propTypes = {
  weeks: PropTypes.arr,
};

export default Week;
