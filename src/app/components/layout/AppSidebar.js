/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// semantic ui components
import { Menu, Icon, Sidebar, Header } from 'semantic-ui-react';

// intl localization
import { FormattedMessage } from "react-intl";

// translation constants keys
import { translationConstants as localization } from '../../constants/index';

class AppSidebar extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  
  render() {
    const { visible } = this.props;
    
    return (
      <div>
        <style>
          {visible && `
            #page-content {
              width: calc(100% - 260px);
            }
          `}
        </style>
        
        <Sidebar.Pushable>
          <Sidebar as={Menu} visible={visible} animation='push' vertical inverted fixed={'left'} borderless
                   className={'sidebar-menu'}>
            <Menu.Item header>
              <Header size={'large'}>Coligo</Header>
            </Menu.Item>
            <Menu.Item as={'a'}>
              <Icon name='home' size='large'/>
              <FormattedMessage
                id={localization.DASHBOARD}
                defaultMessage={'Dashboard'}
              />
            </Menu.Item>
            <Menu.Item as={'a'}>
              <Icon name='calendar alternate outline' size='large'/>
              <FormattedMessage
                id={localization.SCHEDULER}
                defaultMessage={'Schedule'}
              />
            </Menu.Item>
            <Menu.Item as={'a'}>
              <Icon name='book' size='large'/>
              <FormattedMessage
                id={localization.COURSES}
                defaultMessage={'Courses'}
              />
            </Menu.Item>
            <Menu.Item as={'a'}>
              <Icon name='graduation' size='large'/>
              <FormattedMessage
                id={localization.GRADE_BOOK}
                defaultMessage={'Gradebook'}
              />
            </Menu.Item>
            <Menu.Item as={'a'}>
              <Icon name='line graph' size='large'/>
              <FormattedMessage
                id={localization.PERFORMANCE}
                defaultMessage={'Performance'}
              />
            </Menu.Item>
            <Menu.Item as={'a'}>
              <Icon name='announcement' size='large'/>
              <FormattedMessage
                id={localization.ANNOUNCEMENT}
                defaultMessage={'Announcement'}
              />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher id={'page-content'}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

AppSidebar.propTypes = {
  children: PropTypes.any.isRequired
};

export default AppSidebar;