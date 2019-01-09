/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppSidebar from "./AppSidebar";
import TopHeader from "./TopHeader";

// component css styles
import '../../content/styles/layout.css';
import { Loader, Modal } from "semantic-ui-react";
import { connect } from "react-redux";


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
    const { showLoading } = this.props;
    return (
      <AppSidebar visible={sidebarVisible}>
        <TopHeader onSidebarVisibleUpdate={this.handleSidebarHide}/>
        <Modal open={showLoading} basic size='small'>
          <Loader size={'massive'}/>
        </Modal>
        {this.props.children}
      </AppSidebar>
    );
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { showLoading } = state.app;
  return {
    showLoading
  };
};

export default connect (mapStateToProps) (Layout);