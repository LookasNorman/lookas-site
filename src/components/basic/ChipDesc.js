import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  techLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tech: {
    display: 'flex',
    justifyContent: 'center',
    width: '7vw',
    minWidth: '100px',
    margin: '0.5vw 1vw',
  },
}))

export default function ChipDesc ({data}) {

  const classes = useStyles()

  return (
    <div className={classes.techLine} >
      <Chip className={classes.tech} label={data.tech} />
      <span>{data.experience}</span>
    </div>
  )
}
