/**
 * Created by @musta in 08/01/19
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from "semantic-ui-react";
import UserProfile from "./UserProfile";

const NewsFeed = props => {
  return (
    <Grid.Row>
      <Grid.Column width={5}>
        <UserProfile feedDate={props.feedDate} user={props.user}/>
      
      </Grid.Column>
      <Grid.Column width={11}>
        <p className={'quote-text'}>{props.feedText}</p>
      </Grid.Column>
    </Grid.Row>
  );
};

NewsFeed.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    userImage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }),
  feedDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  feedText: PropTypes.string
};


export default NewsFeed;