import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

import { CardTheme } from './CardTheme'
import { CardOne } from './CardOne'
import { CardTwo } from './CardTwo'


const useStyles = makeStyles((theme) => ({
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        display: 'flex',
        alignItems: 'stretch',
        margin: '1vw 0.5vw',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '32%',
        minWidth: '360px',
        margin: '1vw 0',
        backgroundColor: '#eee',
        borderRadius: '0.5vw',
    },
}))

export const Main = ({main}) => {

    const classes = useStyles()

    return (
        <div className={`${classes.main} ${classes.flex}`}>
            {
                main.cards.map( (card, key1)=>{
                    return (
                        <Card key={key1} className={classes.card}>

                            <CardTheme data={card}/>

                            {
                                card.accordion
                                    ?
                                    <CardOne data={card} key1={key1} />
                                    :
                                    <>
                                        {
                                            card.technologies.map( (item, key)=> <CardTwo data={item} key={key + item.tech} /> )
                                        }
                                    </>
                            }

                        </Card>
                    )
                })
            }
        </div>
    )
}
