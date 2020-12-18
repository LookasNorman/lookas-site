import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

import LKPhoto from '../../media/LKPhoto.jpg'
import { MainInfo } from './MainInfo'
import { Paragraph } from './Paragraph'
import { Contacts } from './Contacts'
import { Technologies } from './Technologies'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '1rem',
        justifyContent: 'stretch',
        padding: '0 1vw',
    },
    cover: {
        width: '10vw',
        height: '15vw',
        margin: '1vw',
        borderRadius: '0.5vw',
    },
    lineBtns: {
        display: 'flex',
        width: '100%',
        margin: '0.5vw 0'
    },
}))

export const Header = ({header}) => {

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <img className={classes.cover} src={LKPhoto} alt="Profile" />
            <div>
                <MainInfo data={header.mainInfo} />
                <Paragraph data={header.info} />
                <div className={classes.lineBtns}>
                    <Contacts data={header.tooltip} />
                    <Technologies data={header.technologies} />
                </div>
            </div>
        </Card>
    )
}