import React, { Component } from 'react';
import { Box, Paragraph } from 'reakit';
import { Flex } from 'rebass';

import { Centered, Container } from '../components/base';

class Home extends Component {
  state = {};

  fetchEventList = () => {};
  render() {
    return (
      <Box palette="greys" opaque tone={1} margin={10}>
        <Flex height={1} bg="" flexDirection="column" flexWrap="wrap">
          {' '}
          <Container>
            <Paragraph>Home Edit test</Paragraph>
          </Container>
        </Flex>
      </Box>
    );
  }
}

export default Home;
