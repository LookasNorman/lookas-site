import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {CardContent, Typography} from '@material-ui/core'
import LKPhoto from '../../media/LKPhoto.jpg'
import MeInfo from '../main/MeInfo'

const useStyles = makeStyles((theme) => ({
    content: {
        padding: '1vw',
    },
    parag: {
        textIndent: '2vw',
        margin: '0 0 0.5vw 0'
    },
}))

export default function MeDescription({data}) {
    const classes = useStyles()

    return (
        <CardContent className={classes.content}>
            {data.map((item, key) => (
                <Typography className={classes.parag} variant="body2" color="textPrimary" component="p" align="justify" key={key}>
                    {item.p}
                </Typography>
            ))}
        </CardContent>
    )
}