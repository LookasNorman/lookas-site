import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Expirience from './Expirience'
import Courses from './Courses'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function Main() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AboutMe />
      <div className="homeGrid">
        <Portfolio />
        <Expirience />
        <Courses />
      </div>
    </div>
  )
}
