/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// semantic ui components
import { Container, Header, Icon, Image, Input, Menu, Responsive } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

import { translationConstants as localization } from '../../constants/index';
import NotifyIcon from "../generic/NotifyIcon";


import userImage from '../../content/images/user-image.jpg';

class TopHeader extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      userName: 'Talia',
      smallScreen: false
    };
  }
  
  handleSidebarHide = () => {
    this.props.onSidebarVisibleUpdate ();
    console.log ('Click Event !');
  };
  
  handleSidebarUpdate = (e, { width }) => {
    
    console.log (width, Responsive.onlyTablet.minWidth);
    
    console.log ('Update Event !');
    
    // update top menu
    if(width >= Responsive.onlyTablet.minWidth) {
      this.setState({smallScreen: false});
  
    } else {
      this.setState({smallScreen: true});
    }
    
    // update sidebar
    if (width >= Responsive.onlyComputer.minWidth) {
      this.props.onSidebarVisibleUpdate (true);
    } else {
      this.props.onSidebarVisibleUpdate (false);
    }
  };
  
  render() {
    const { userName, smallScreen } = this.state;
    const maxWidth = Responsive.onlyComputer.minWidth;
    return (
      <div className={smallScreen ? 'top-menu top-menu-small': 'top-menu' }>
        <Container fluid>
          <Menu secondary vertical={smallScreen}>
            
            <Menu.Item as={Responsive} onUpdate={this.handleSidebarUpdate}
                       onClick={this.handleSidebarHide}
                       maxWidth={maxWidth}>
              <Icon className={'sidebar-trigger'} link name={'bars'} size={'large'}/>
            </Menu.Item>
            
            <Menu.Item header>
              <Header size={'large'}>
                <FormattedMessage id={localization.WELCOME_USER} defaultMessage={'Welcome {userName},'}
                                  values={{ userName }}/>
              </Header>
            </Menu.Item>
            <Menu.Menu position={'right'}>
              <Menu.Item as={'a'}>
                <Input icon='search' iconPosition='left' placeholder='Search...'/>
              </Menu.Item>
              <Menu.Item as={'a'}>
                <NotifyIcon iconName={'bell'} iconSize={'big'}
                            iconAsLink iconColor={'blue'}
                            iconCustomColor={'#40739e'}
                            labeled labelCircular
                            labelContent={1} labelColor={'teal'}
                            labelFloat labelSize={'tiny'}/>
              </Menu.Item>
              <Menu.Item as={'a'}>
                <NotifyIcon iconName={'mail'} iconSize={'big'}
                            iconAsLink iconColor={'blue'}
                            iconCustomColor={'#40739e'}
                            labeled labelCircular
                            labelContent={3} labelColor={'teal'}
                            labelFloat labelSize={'tiny'}/>
              </Menu.Item>
              <Menu.Item as={'a'}>
                <Image src={userImage} circular size={'mini'}/>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    );
  }
}

TopHeader.propTypes = {
  onSidebarVisibleUpdate: PropTypes.func
};

export default TopHeader;