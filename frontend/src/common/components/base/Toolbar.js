import React from 'react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';

const Toolbar = ({ children, bg, color, ...rest }) => {
  return (
    <Flex m={0} color={color} bg={bg} alignItems="center" {...rest}>
      {children}
    </Flex>
  );
};

Toolbar.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
};

Toolbar.defaultProps = {
  bg: 'black',
  color: 'white'
};

export default Toolbar;
