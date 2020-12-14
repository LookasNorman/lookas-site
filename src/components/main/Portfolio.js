import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Apps from '@material-ui/icons/Apps'
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

export default function Portfolio() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Apps />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <CardContent className={classes.content}>
          <ListItem>
            <ListItemText
              primary="System zarządzania fermą"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    Aplikacja służąca do gromadzenia parametrów chowu stad kur reprodukcyjnych. Prezentuje bieżące i
                    archiwalne wyniki w postaci wykresów oraz raportów.
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="PHP" />
                    <Chip label="MySQL" />
                    <Chip label="ChartJS" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Donations"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    Aplikacja służąca do dzielenia się niepotrzebnymi rzeczami. Projekt w ramach kursu Coders Lab.
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="PHP" />
                    <Chip label="MySQL" />
                    <Chip label="Symfony" />
                    <Chip label="JavaScript" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Jedzonko"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    Aplikacja do planowania posiłków, Projekt w ramach kursu Coders Lab.
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="PHP" />
                    <Chip label="MySQL" />
                    <Chip label="Symfony" />
                    <Chip label="Scrum" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Paczkolab"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    Aplikacja do nadawania przesyłek. Projekt w ramach kursu Coders Lab.
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="PHP" />
                    <Chip label="MySQL" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText
              primary="Bookstore"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    Aplikacja do ewidencji książek. Projekt w ramach kursu Coders Lab.
                  </Typography>
                  <div className={classes.chip}>
                    <Chip label="JavaScript" />
                  </div>
                </React.Fragment>
              }
            />
          </ListItem>
        </CardContent>
      </div>
    </Card>
  )
}
