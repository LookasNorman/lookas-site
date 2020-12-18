import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AboutMe from'../components/main/AboutMe'
import Details from'../components/main/Details'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export default function Main({ state }) {
  const classes = useStyles()

  return (
    <>
      <AboutMe data={state.header} />
      <Details data={state.main}/>
    </>
  )
}