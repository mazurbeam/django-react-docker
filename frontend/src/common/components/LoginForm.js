import React, { Component } from 'react';
import {
  // Label,
  // Input,
  Alert,
  ControlFeedback
} from '@smooth-ui/core-sc';
import { Heading, Button, Box, Input, Field } from 'reakit';

// import { Box } from 'reakit';
// import { Heading } from 'rebass';
import { Centered } from './base';

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
        <Box palette="secondary">
          <Heading palette="primary" tone={3} textAlign="center">
            LOG IN
          </Heading>
          {errors.non_field_errors ? (
            <Alert color="danger">{errors.non_field_errors}</Alert>
          ) : (
            ''
          )}
          <form onSubmit={this.onSubmit}>
            <Field padding={8}>
              <Input
                id="form-group-input-name"
                name="username"
                onChange={this.handleInputChange}
                width={'300px'}
                placeholder="username"
              />
              {errors.username && (
                <ControlFeedback valid={false}>
                  {errors.username}
                </ControlFeedback>
              )}
            </Field>
            <Field padding={8}>
              <Input
                id="form-group-input-firstname"
                name="password"
                type="password"
                onChange={this.handleInputChange}
                width={'300px'}
                placeholder="password"
              />
              {errors.password && (
                <ControlFeedback valid={false}>
                  {errors.password}
                </ControlFeedback>
              )}
            </Field>
            <Button
              palette="primary"
              margin={8}
              width={'300px'}
              tone={3}
              onClick={this.onSubmit}
              color="white"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Centered>
    );
  }
}

export default LoginForm;
