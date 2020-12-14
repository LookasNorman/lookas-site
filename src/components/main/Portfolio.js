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
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography className={classes.heading}>System zarządzania fermą</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  Aplikacja służąca do gromadzenia parametrów chowu stad kur reprodukcyjnych. Prezentuje bieżące i
                  archiwalne wyniki w postaci wykresów oraz raportów.
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography className={classes.heading}>Donations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  Aplikacja służąca do dzielenia się niepotrzebnymi rzeczami. Projekt w ramach kursu Coders Lab.
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                  <Chip label="Symfony" />
                  <Chip label="JavaScript" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography className={classes.heading}>Jedzonko</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  Aplikacja do planowania posiłków, Projekt w ramach kursu Coders Lab.
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                  <Chip label="Symfony" />
                  <Chip label="Scrum" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                <Typography className={classes.heading}>Paczkolab</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  Aplikacja do nadawania przesyłek. Projekt w ramach kursu Coders Lab.
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="PHP" />
                  <Chip label="MySQL" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
                <Typography className={classes.heading}>Bookstore</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  Aplikacja do ewidencji książek. Projekt w ramach kursu Coders Lab.
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <div className={classes.chip}>
                  <Chip label="JavaScript" />
                </div>
              </AccordionActions>
            </Accordion>
          </ListItem>
        </CardContent>
      </div>
    </Card>
  )
}
