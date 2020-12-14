import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import SchoolIcon from '@material-ui/icons/School'
import { Divider, ListItem, ListItemText } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  inline: {
    display: 'inline',
  },
}))

export default function Courses() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Courses" />
        </ListItem>
        <CardContent className={classes.content}>
          <ListItem>
            <ListItemText
              primary="Coders Lab JavaScript: React + Redux"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    nr dyplomu 4639/2019
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="React" />
                    <Chip label="Redux" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Coders Lab Backend Developer PHP"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    nr dyplomu 4120/2019
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="PHP" />
                    <Chip label="MySQL" />
                    <Chip label="Symfony" />
                    <Chip label="JavaScript" />
                    <Chip label="Scrum" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Akademia ekonomiczna"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    Informatyka i ekonometria. Zarządzanie informacją i wiedzą. Studia przerwane na 5 roku.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </CardContent>
      </div>
    </Card>
  )
}
