/**
 * Created by @musta in 30/12/18
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import { translationConstants as localization } from '../../constants/index';


const Assignment = props => {
    const { titleIcon } = props;
    return (
      <div className={[props.className, 'assignment-container'].join(' ')}>
        <Header>
          {titleIcon && titleIcon.name && <Icon name={titleIcon.name}
                                                color={titleIcon.color}
                                                size={titleIcon.size}/>}
          {(!titleIcon.name) && titleIcon}
          <Header.Content>{props.title}</Header.Content>
        </Header>
        <div className={'quote-text'}>
          {props.relatedToCourse && <p>
            <FormattedMessage id={localization.COURSE}
                              defaultMessage={'Course'}/>: {props.relatedToCourse}</p>}
          {props.topic && <p><FormattedMessage id={localization.TOPIC}
                                               defaultMessage={'Topic'}/>: {props.topic}</p>}
          {props.due && <p><FormattedMessage id={localization.DUE_TO}
                                             defaultMessage={'Due To'}/>: {props.due}</p>}
          {props.action}
        </div>
      </div>
    );
};

Assignment.propTypes = {
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.oneOfType ([
    PropTypes.shape ({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      size: PropTypes.string
    }),
    PropTypes.element
  ]),
  relatedToCourse: PropTypes.string,
  topic: PropTypes.string,
  due: PropTypes.string,
  action: PropTypes.any,
  className: PropTypes.string
};

export default Assignment;