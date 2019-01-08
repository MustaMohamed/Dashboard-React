/**
 * Created by @musta in 08/01/19
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image } from "semantic-ui-react";


import userImage from '../../content/images/user-image.jpg';

const UserProfile = props => {
  return (
    <div className={'user-profile'}>
      <Image size={'mini'} verticalAlign={'middle'} floated={'left'} circular
             src={props.user.userImage ? props.user.userImage : userImage}/>
      <Header size={'tiny'}>
        {props.user.userName}
      </Header>
      <p className={'quote-text'}>{props.feedDate}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape ({
    userName: PropTypes.string,
    userImage: PropTypes.oneOfType ([
      PropTypes.string,
      PropTypes.object
    ])
  }),
  feedDate: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.object
  ])
};

export default UserProfile;