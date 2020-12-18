import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Chip,
    CardContent,
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ListItem
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


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

export const CardOne = ({data, index1}) => {

    const classes = useStyles()

    const [expanded, setExpanded] = React.useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <CardContent className={classes.content}>
            {
                data.accordion.map( (item, index) => (
                    <ListItem key={index}>

                        <Accordion className={classes.list} expanded={expanded === 'panel' + index1 + index}
                                   onChange={handleChange('panel' + index1 + index)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
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
                            </div>

                        </Accordion>

                    </ListItem>
                ))
            }
        </CardContent>
    )
}
