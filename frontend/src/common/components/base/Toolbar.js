import React from 'react';
import { Flex, Box, Text } from 'rebass';

const Toolbar = props => {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        Home Page
      </Text>
      <Box mx="auto" />
    </Flex>
  );
};

export default Toolbar;
