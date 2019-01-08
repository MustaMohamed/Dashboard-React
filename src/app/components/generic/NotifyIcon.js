/**
 * Created by @musta in 31/12/18
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Label } from "semantic-ui-react";

const NotifyIcon = props => {
  return (
    <div>
      <style> {
        `
          #notify-icon {
            position: relative;
            color: ${props.iconCustomColor} !important;
          }
        `}
      </style>
      <Icon id={'notify-icon'}
            circular={props.iconCircular}
            name={props.iconName}
            link={props.iconAsLink}
            size={props.iconSize}
            color={props.iconColor}>
        {props.labeled && <Label color={props.labelColor}
                                 size={props.labelSize}
                                 floating={props.labelFloat}
                                 circular={props.labelCircular}>
          {props.labelContent}
        </Label>}
      </Icon>
    </div>
  );
};

NotifyIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconCustomColor: PropTypes.string,
  iconCircular: PropTypes.bool,
  iconSize: PropTypes.string,
  iconAsLink: PropTypes.bool,
  labeled: PropTypes.bool,
  labelContent: PropTypes.any,
  labelColor: PropTypes.string,
  labelFloat: PropTypes.bool,
  labelCircular: PropTypes.bool,
  labelSize: PropTypes.string
};

export default NotifyIcon;