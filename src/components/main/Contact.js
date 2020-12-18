import React from 'react'
import {CardActions, Tooltip} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    tooltips: {
        display: 'flex',
        width: '20%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minWidth: '150px',
        flexWrap: 'wrap',
    },
    tooltip: {
        width: '5vw',
        height: '2vw',
        minWidth: '100px',
        minHeight: '30px',
        margin: '0.5vw',
        borderRadius: '0.5vw',
        backgroundColor: 'lightgray',
    },
}))

export default function Contact({contact}) {
    const classes = useStyles()
    return (
        <div className={classes.tooltips}>
            {contact.map((item, key) => (
                <Tooltip key={key} title={<h3>{item.text}</h3>} interactive className={classes.tooltip}>
                    {item.icon}
                </Tooltip>
            ))}
        </div>
    )

}