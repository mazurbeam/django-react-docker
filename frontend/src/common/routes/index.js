
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Counter from '../components/Counter'

export default () => (
    <Switch>
        <Route exact path="/" component={Counter} />
    </Switch>
)