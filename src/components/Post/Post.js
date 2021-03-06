import React from 'react';
import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

const Post = ({ post, updateVote }) => {
  console.log(post);
  return (
    <Card style={{ width: '98%', margin: '15px auto' }} key={post.id}>
      <CardTitle
        style={{ padding: '8px 15px' }}
        titleColor='#551A8B'
        titleStyle={{ fontSize: '1.25rem', fontWeight: 'bold', padding: '0px' }}
        title={post.title}
      />
      <CardText style={{ fontSize: '1rem', padding: '8px 15px' }}>
        {post.description}
      </CardText>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardActions>
          <FlatButton
            label={ 'Vote ' + post.votes}
            labelPosition="after"
            icon={<NavigationArrowDropUp />}
            onTouchTap={() => { updateVote(post.id); }}
          />
        </CardActions>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        {post.tags.map(tag => (
          <Chip
            style={{ margin: '10px' }}
            id={tag.id}
          >
            {tag.tag}
          </Chip>
        ))}
        </div>
      </div>
    </Card>
  );
};

export default Post;
