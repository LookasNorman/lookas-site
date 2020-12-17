import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import SchoolIcon from '@material-ui/icons/School'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
  according: {
    display: 'inline-block',
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

export default function Courses() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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
            <Accordion className={classes.according} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography className={classes.heading}>Coders Lab JavaScript: React + Redux</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  nr dyplomu 4639/2019
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="React" />
                  <Chip label="Redux" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography className={classes.heading}>Coders Lab Backend Developer PHP</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  nr dyplomu 4120/2019
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                  <Chip label="Symfony" />
                  <Chip label="JavaScript" />
                  <Chip label="Scrum" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography className={classes.heading}>Akademia ekonomiczna - Kraków / Wrocław</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  Informatyka i ekonometria. Zarządzanie informacją i wiedzą. Studia przerwane na 5 roku.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        </CardContent>
      </div>
    </Card>
  )
}
