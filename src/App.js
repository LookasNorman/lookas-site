import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/Main'

export default function App({ state }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main state={state} />
        </Route>
      </Switch>
    </Router>
  )
}
