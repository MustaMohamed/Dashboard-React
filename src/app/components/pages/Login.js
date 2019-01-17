/**
 * Created by @musta in 30/12/18
 */

import React, { Component } from 'react';
import { userActions } from '../../redux/actions';
import { connect } from 'react-redux';
import { Button, Container } from 'semantic-ui-react';

class Login extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  componentDidMount() {
  }
  
  login = () => {
    this.props.dispatch (userActions.userLogin ());
  };
  
  render() {
    return (
      <Container>
        <Button onClick={this.login} content={'Login!'}/>
      </Container>
    );
  }
}

Login.propTypes = {};


const mapStateToProps = state => {
  const { user } = state.user;
  return {
    user
  };
};

export default connect (mapStateToProps) (Login);