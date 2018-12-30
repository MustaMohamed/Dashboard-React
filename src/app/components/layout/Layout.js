/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppSidebar from "./AppSidebar";
import TopHeader from "./TopHeader";


class Layout extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  render() {
    return (
      <AppSidebar>
        <TopHeader/>
        {this.props.children}
      </AppSidebar>
    );
  }
}

Layout.propTypes = {};

export default Layout;