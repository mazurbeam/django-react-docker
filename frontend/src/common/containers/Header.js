import React, { Component } from 'react';
import { Toolbar } from '../components/base';

class Header extends Component {
  state = {};
  render() {
    // const { location } = this.props;
    const { bg } = this.props;
    return <Toolbar bg={bg} />;
  }
}

export default Header;
