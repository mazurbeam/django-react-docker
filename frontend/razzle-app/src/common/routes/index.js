import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import HomeContainer from '../containers/Home';
import RosterContainer from '../containers/Roster'
import MusicContainer from '../containers/Music'
import NewsContainer from '../containers/News'
import EventsContainer from '../containers/Events'
import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/artists" component={RosterContainer}/>
    <Route exact path='/music' component={MusicContainer}/>
    <Route exact path='/news' component={NewsContainer}
    <Route exact path="/events" component={EventsContainer}
	  <Route path="/" component={HomeContainer}/>
  </Switch>
);
