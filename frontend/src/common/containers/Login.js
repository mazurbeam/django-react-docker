import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Flex, Box, Card } from 'rebass';
import { FormGroup, Label, Input, Button } from '@smooth-ui/core-sc';
import { login } from '../store/auth/actions';
import { authErrors, isAuthenticated } from '../store/auth/reducer';
class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleInputChange = event => {
    const target = event.target,
      value = target.type === 'checkbox' ? target.checked : target.value,
      name = target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  render() {
    return (
      <Flex alignItems="center">
        <Box ml="auto" />
        <Card mt={200}>
          <Text textAlign="center">Login Page</Text>
          <form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label htmlFor="form-group-input-name">Name</Label>
              <Input
                control
                id="form-group-input-name"
                name="username"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="form-group-input-firstname">Password</Label>
              <Input
                control
                id="form-group-input-firstname"
                name="password"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button onClick={this.onSubmit}>Login</Button>
          </form>
        </Card>
        <Box mr="auto" />
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
