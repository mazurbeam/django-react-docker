import React, { Component } from 'react';
import { Toolbar } from '../components/base';
import { Box, Text } from 'rebass';

class Header extends Component {
  state = {};
  render() {
    // const { location } = this.props;
    const { bg } = this.props;
    return (
      <Toolbar bg={bg} p={2}>
        <Text p={2} fontWeight="bold">
          Home Page
        </Text>
        <Box mx="auto" />
        <Text p={2}>Profile</Text>
      </Toolbar>
    );
  }
}

export default Header;
