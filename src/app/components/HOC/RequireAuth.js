/**
 * Created by @musta in 08/01/19
 */

import React from 'react';
import { connect } from "react-redux";
import Login from "../pages/Login";
import Home from "../pages/Home";

const RequireAuth = props => {
  return props.user ? <Home/> : <Login/>;
};

RequireAuth.propTypes = {};

const mapStateToProps = state => {
  console.log (state.user);
  const { user } = state.user;
  return {
    user
  };
};

export default connect (mapStateToProps) (RequireAuth);