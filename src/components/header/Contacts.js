import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tooltip } from '@material-ui/core'


const useStyles = makeStyles({
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
})

export const Contacts = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.tooltips}>
            {
                  data.map((btn, index) => (
                        <Tooltip className={classes.tooltip} key={index} title={<h3>{btn.text}</h3>} interactive>
                            {btn.icon}
                        </Tooltip>
                    )
                )}
        </div>
    )
}