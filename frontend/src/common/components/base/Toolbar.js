import React from 'react';
import { Flex, Box, Text } from 'rebass';
import PropTypes from 'prop-types';

const Toolbar = props => {
  return (
    <Flex m={0} color={props.color} bg={props.bg} alignItems="center">
      <Text p={2} fontWeight="bold">
        Home Page
      </Text>
      <Box mx="auto" />
    </Flex>
  );
};

Toolbar.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string
};

Toolbar.defaultProps = {
  bg: 'black',
  color: 'white'
};

export default Toolbar;
