/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// semantic ui components
import { Menu, Icon } from 'semantic-ui-react';


class AppSidebar extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      visible: true,
      width: 350
    };
  }
  
  handleSidebarHide = () => {
  
  };
  
  
  render() {
    const {visible, width} = this.state;
    return (
      <div>
        <Menu vertical inverted fixed={'left'} borderless>
          <Menu.Item header>Collige</Menu.Item>
          <Menu.Item as={'a'}>Home</Menu.Item>
          <Menu.Item as={'a'} name={'asfa'}>Home</Menu.Item>
          <Menu.Item as={'a'}>Home</Menu.Item>
          <Menu.Item as={'a'}>Home</Menu.Item>
        </Menu>
        <div style={{marginLeft: visible ? '15rem': '0'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppSidebar.propTypes = {
  children: PropTypes.any.isRequired
};

export default AppSidebar;