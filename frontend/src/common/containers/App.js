import React from 'react';
// import { Box } from 'rebass';
import { Route, Switch } from 'react-router-dom'
import Counter from './Counter'

export default () => (
    <Switch>
        <Route exact path="/" component={Counter} />
    </Switch>
)