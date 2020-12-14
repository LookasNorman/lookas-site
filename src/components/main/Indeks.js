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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AboutMe />
        </Grid>
        <Grid item xs={4}>
          <Portfolio />
        </Grid>
        <Grid item xs={4}>
          <Expirience />
        </Grid>
        <Grid item xs={4}>
          <Courses />
        </Grid>
      </Grid>
    </div>
  )
}
