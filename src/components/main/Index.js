import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Expirience from './Expirience'
import Courses from './Courses'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    [theme.breakpoints.down(1100)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down(600)]: {
      gridTemplateColumns: '1fr',
    },
  },
}))

export default function Main() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AboutMe />
      <div className={classes.grid3}>
        <Portfolio />
        <Expirience />
        <Courses />
      </div>
    </div>
  )
}
