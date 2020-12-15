import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import { ListItem, ListItemText, Chip, Typography, ListItemIcon } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  inline: {
    align: 'right',
  },
  content: {
    flex: '1 0 auto',
  },
}))

export default function Expirience() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SettingsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Doświadczenie" />
        </ListItem>
      </div>
      <CardContent className={classes.content}>
        <ListItem>
          <ListItemIcon>
            <Chip label="PHP" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            7 years
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Chip label="MySQL" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            7 years
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Chip label="Symfony" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            2 years
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Chip label="JavaScript" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            2 years
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Chip label="JQuery" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            2 years
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Chip label="Scrum" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            1 years
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Chip label="React" />
          </ListItemIcon>
          <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
            1 years
          </Typography>
        </ListItem>
      </CardContent>
    </Card>
  )
}
