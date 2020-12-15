import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Apps from '@material-ui/icons/Apps'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  details: {
    display: 'flex',
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '90%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default function Portfolio() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const data = [
    {
      header: 'System zarządzania fermą',
      text:
        'Aplikacja służąca do gromadzenia parametrów chowu stad kur reprodukcyjnych. Prezentuje bieżące i archiwalne wyniki w postaci wykresów oraz raportów.',
      chip: ['PHP', 'MySQL'],
    },
    {
      header: 'Donations',
      text: 'Aplikacja służąca do dzielenia się niepotrzebnymi rzeczami. Projekt w ramach kursu Coders Lab.',
      chip: ['PHP', 'MySQL', 'Symfony', 'JavaScript'],
    },
    {
      header: 'Jedzonko',
      text: 'Aplikacja do planowania posiłków, Projekt w ramach kursu Coders Lab.',
      chip: ['PHP', 'MySQL', 'Symfony', 'Scrum'],
    },
    {
      header: 'Paczkolab',
      text: 'Aplikacja do nadawania przesyłek. Projekt w ramach kursu Coders Lab.',
      chip: ['PHP', 'MySQL'],
    },
    {
      header: 'Bookstore',
      text: 'Aplikacja do ewidencji książek. Projekt w ramach kursu Coders Lab.',
      chip: ['JavaScript'],
    },
  ]

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Card className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Apps />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Portfolio" />
      </ListItem>
      <CardContent className={classes.content}>
        {data.map((item, key) => (
          <ListItem key={key}>
            <Accordion expanded={expanded === 'panel' + key} onChange={handleChange('panel' + key)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panelbh-header">
                <Typography className={classes.heading}>{item.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  {item.text}
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  {item.chip.map((itemChip) => (
                    <Chip label={itemChip} key={itemChip} />
                  ))}
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
        ))}
      </CardContent>
    </Card>
  )
}
