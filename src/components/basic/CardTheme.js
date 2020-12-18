import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, ListItemText } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    alignContent: 'center',
  },
  avatar: {
    width: '3vw',
    height: '3vw',
    margin: '0.5vw 1vw',
  },
}))

export default function CardTheme ({data}) {

  const classes = useStyles()

  return (
    <div className={`${classes.details} ${classes.flex}`}>
      <Avatar className={classes.avatar} >{data.cardIcon}</Avatar>
      <ListItemText primary={data.header}  />
    </div>
  )
}
