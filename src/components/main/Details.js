import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardTheme from '../basic/CardTheme'
import CardAccordion from '../basic/CardAccordion'
import ChipDesc from '../basic/ChipDesc'

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

export default function Details({ data }) {
  const classes = useStyles()
  return (
    <div className={`${classes.main} ${classes.flex}`}>
      {
        data.cards.map((card, key) => {
          return (
            <Card key={key} className={classes.card}>
              <CardTheme data={card} />
              {
                card.accordion ? <CardAccordion data={card} key={key}/> : <>
                  {
                    card.technologies.map( (item, key)=> <ChipDesc data={item} key={key + item.tech} /> )
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