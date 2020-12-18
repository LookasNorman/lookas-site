import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Card} from '@material-ui/core'
import LKPhoto from '../../media/LKPhoto.jpg'
import MeInfo from '../main/MeInfo'
import MeDescription from '../main/MeDescription'
import Contact from '../main/Contact'
import MeTechnologies from '../main/MeTechnologies'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '1rem',
        justifyContent: 'stretch',
        padding: '0 1vw',
    },
    cover: {
        height: '15vw',
        width: '10vw',
        margin: '1vw',
        borderRadius: '0.5vw',
    },
    lineBtns: {
        display: 'flex',
        width: '100%',
        margin: '0.5vw 0'
    },
}))

export default function AboutMe({header}) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <img className={classes.cover} src={LKPhoto} alt="Profile" />
            <div>
                <MeInfo meInfo={header.mainInfo}/>
                <MeDescription info={header.info}/>
                <div className={classes.lineBtns}>
                <Contact contact={header.tooltip}/>
                <MeTechnologies data={header.technologies}/>
                </div>
            </div>
        </Card>
    )
}