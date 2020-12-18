import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'


const useStyles = makeStyles({
    technologies: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '0.5vw',
        flexWrap: 'wrap',
    },
    tech: {
        display: 'flex',
        justifyContent: 'center',
        width: '7vw',
        minWidth: '100px',
        margin: '0.5vw',
    },
})

export const Technologies = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.technologies}>
            { data.map( (item, index) => ( <Chip className={classes.tech} label={item.tech} key={index + item.tech} /> ) ) }
        </div>
    )
}