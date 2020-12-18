import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Bz from './Apps'
import Main from './pages/Main'

export default function App({state}) {

    return (
        <Router>
            <Switch>
                <Route exact path='/'><Main state={state}/></Route>
                <Route path='/bz'><Bz state={state}/></Route>
            </Switch>
        </Router>
    )
}
