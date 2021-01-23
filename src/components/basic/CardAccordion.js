import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Chip,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
} from '@material-ui/core'
import { Http, ExpandMore } from '@material-ui/icons'
import GitHubMark from '../../media/GitHubMark.png'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    padding: '0 0 1vw 0',
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
  tech: {
    display: 'flex',
    justifyContent: 'center',
    width: '7vw',
    minWidth: '100px',
    margin: '0.5vw 1vw',
  },
}))

export default function CardAccordion({ data, index1 }) {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <CardContent className={classes.content}>
      {data.accordion.map((item, index) => (
        <ListItem key={index}>
          <Accordion
            className={classes.list}
            expanded={expanded === 'panel' + index1 + index}
            onChange={handleChange('panel' + index1 + index)}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography className={classes.heading}>{item.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                {item.text}
              </Typography>
            </AccordionDetails>
            <div>
              {item.chip && (
                <div className={classes.chip}>
                  {item.chip.map((itemChip, key) => (
                    <Chip className={classes.tech} label={itemChip} key={key + itemChip} />
                  ))}
                </div>
              )}
              {item.gitLink && (
                <div className={classes.chip}>
                  <a href={item.gitLink} target="_blank" rel="noreferrer">
                    <img src={GitHubMark} alt="GitHub repository link" />
                  </a>
                </div>
              )}
              {item.siteLink && (
                <div className={classes.chip}>
                  <a href={item.siteLink} target="_blank" rel="noreferrer">
                    <Http />
                  </a>
                </div>
              )}
            </div>
          </Accordion>
        </ListItem>
      ))}
    </CardContent>
  )
}
