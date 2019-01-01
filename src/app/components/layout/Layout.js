/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import AppSidebar from "./AppSidebar";
import TopHeader from "./TopHeader";

// component css styles
import '../../content/styles/layout.css';
import { Container } from "semantic-ui-react";


class Layout extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      sidebarVisible: true
    };
  }
  
  handleSidebarHide = (visible) => {
    const isVisible = visible !== undefined ? visible : !this.state.sidebarVisible;
    
    this.setState ({ sidebarVisible: isVisible });
  };
  
  render() {
    const { sidebarVisible } = this.state;
    return (
      <AppSidebar visible={sidebarVisible}>
        <TopHeader onSidebarVisibleUpdate={this.handleSidebarHide}/>
        {this.props.children}
      </AppSidebar>
    );
  }
}

Layout.propTypes = {};

export default Layout;