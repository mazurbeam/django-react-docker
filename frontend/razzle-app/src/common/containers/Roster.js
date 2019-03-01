import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { authSelectors } from '../store/auth';

import Roster from '../pages/Roster';
import Header from './Header';
import { Container, Viewport } from '../components/base';

const RosterContainer = props => {
	return (
		<Viewport palette="blacks" opaque tone={0}>
			<Header {...props} bg="blackBg" />
			<Roster {...props} />
		</Viewport>
	);
};

const mapStateToProps = state => ({
	errors: authSelectors.authErrors(state.auth),
	isAuthenticated: authSelectors.isAuthenticated(state.auth)
});

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (username, password) => {
//     dispatch(authOperations.login(username, password));
//   }
// });

export default connect(mapStateToProps)(RosterContainer);
