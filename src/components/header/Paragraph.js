import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    infoText: {
        padding: '1vw',
    },
    parag: {
        textIndent: '2vw',
        margin: '0 0 0.5vw 0'
    },
})

export const Paragraph = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.infoText} >
            {
                data.map( (text, index) => {
                    return (
                        <Typography
                            className={classes.parag} variant="body2" color="textPrimary" component="p" align="justify" key={index}
                        >
                            {text.p}
                        </Typography>
                    )
                })
            }
        </div>
    )
}