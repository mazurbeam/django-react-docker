import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components'

import { Menu } from 'styled-icons/icomoon/Menu';
import {Link} from 'react-router-dom'
import { Button } from "reakit";
import { Flex, Box, Text, Image } from 'rebass';

// redux module
import { authOperations, authSelectors } from '../store/auth';

// styled-components

import { Toolbar } from '../components/base';
import {NavLink} from '../components/base'

import bannerImg from '../static/imgs/banner.jpg'


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
		};
	}

  componentDidMount() {
    const { fetchAccount, userID } = this.props;
    if (userID != undefined) {
      fetchAccount(userID.user_id);
    }
  }

  render() {
    // const { location } = this.props;
    const { bg } = this.props;
    return (
      <Toolbar bg={bg} p={2}>


        <Box mx='auto'>
        <Text p={2} fontWeight="bold">
        </Text>
        </Box>
        <Box >
          <Link to='/'><Image src={bannerImg}/></Link>
          <Box  width={1} display='block'>
	          <Flex  flexWrap='wrap' flexDirection='row' alignItem='center' justifyContent='center'>
            <NavLink to='/artists'>Artist Roster</NavLink>
	          <NavLink to='/'>Music</NavLink>
	          <NavLink to='/'>News</NavLink>
	          <NavLink to='/'>Events</NavLink>
		          <NavLink to='/login'>Signup</NavLink>
		          <NavLink to='/login'>Login</NavLink>

            </Flex>

          </Box>
        </Box>
        <Box mx='auto'>
        </Box>
      </Toolbar>
    );
  }
}

const mapStateToProps = state => ({
  errors: authSelectors.authErrors(state.auth),
  isAuthenticated: authSelectors.isAuthenticated(state.auth),
  userID: authSelectors.userId(state.auth)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(authOperations.login(username, password));
  },
  fetchAccount: id => {
    dispatch(authOperations.fetchAccountInfo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
