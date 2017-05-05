import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
              <Link to={`/lessons/${lesson.id}/posts`}>
                <ListItem primaryText={lesson.title} />
              </Link>
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
