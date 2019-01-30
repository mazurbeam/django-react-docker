import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  ControlFeedback
} from '@smooth-ui/core-sc';
import styled from 'styled-components';
import { Heading, Box, Card } from 'rebass';

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
class LoginForm extends Component {
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
    const errors = this.props.errors || {};

    return (
      <Centered>
        <Heading textAlign="center">Login</Heading>
        {errors.non_field_errors ? (
          <Alert color="danger">{errors.non_field_errors}</Alert>
        ) : (
          ''
        )}
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label htmlFor="form-group-input-name">Name</Label>
            <Input
              control
              id="form-group-input-name"
              name="username"
              onChange={this.handleInputChange}
            />
            {errors.username && (
              <ControlFeedback valid={false}>{errors.username}</ControlFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="form-group-input-firstname">Password</Label>
            <Input
              control
              id="form-group-input-firstname"
              name="password"
              onChange={this.handleInputChange}
            />
            {errors.password && (
              <ControlFeedback valid={false}>{errors.password}</ControlFeedback>
            )}
          </FormGroup>
          <Button ml="auto" onClick={this.onSubmit}>
            Login
          </Button>
        </form>
      </Centered>
    );
  }
}

export default LoginForm;
