/**
 * Created by @musta in 08/01/19
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import UserProfile from './UserProfile';

const Announcement = props => {
  return (
    <Grid.Row>
      <Grid.Column width={5}>
        <UserProfile announceDate={props.announceDate} user={props.user}/>
      
      </Grid.Column>
      <Grid.Column width={11}>
        <p className={'quote-text'}>{props.announceText}</p>
      </Grid.Column>
    </Grid.Row>
  );
};

Announcement.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    userImage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }),
  announceDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  announceText: PropTypes.string
};


export default Announcement;