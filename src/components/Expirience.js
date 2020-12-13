import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import { ListItem, ListItemText, Chip, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  inline: {
    align: 'right',
  },
}))

export default function Expirience() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SettingsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Doświadczenie" />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <Chip label="PHP" />
        </Grid>
        <Grid item xs={6}>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            7 years
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chip label="MySQL" />
        </Grid>
        <Grid item xs={6}>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            7 years
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chip label="Symfony" />
        </Grid>
        <Grid item xs={6}>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            2 years
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chip label="JavaScript" />
        </Grid>
        <Grid item xs={6}>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            2 years
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chip label="JQuery" />
        </Grid>
        <Grid item xs={6}>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            2 years
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chip label="React" />
        </Grid>
        <Grid item xs={6}>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            1 years
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
