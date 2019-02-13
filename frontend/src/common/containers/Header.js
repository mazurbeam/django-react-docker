import React, { Component } from 'react';
import { connect } from 'react-redux';

// redux module
import { authOperations, authSelectors } from '../store/auth';

// styled-components
import { Box, Text } from 'rebass';
import { Avatar } from 'reakit';
import { Menu } from 'styled-icons/icomoon/Menu';
import { Toolbar } from '../components/base';

class Header extends Component {
  state = {};

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
        <Text p={2} fontWeight="bold">
          <Menu size="40" />
        </Text>
        <Box mx="auto">
          <Text>Home</Text>
        </Box>
        <Avatar
          src="https://placekitten.com/150/200"
          alt="Kitten"
          fontSize={40}
        />
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
