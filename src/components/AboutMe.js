import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import LKPhoto from './../media/LKPhoto.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 120,
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

export default function AboutMe() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={LKPhoto} title="Live from space album cover" />
      <div className={classes.details}>
        <CardHeader title="Łukasz Konieczny" subheader="PHP Backend Developer" />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textPrimary" component="p" align="justify">
            Junior PHP Backend Devloperem z podstawową znajomością frontend. Programuję w fraemworku Symfony 3.4 i 4.4.
            Z fraemworków frontend posiadam podstawową znajomość React.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="justify">
            W dotychczasowej karierze zawodowej zawsze starałem się wykorzystać technologie do poprawy wydajności pracy.
            Początkowo było to Excel z VBA później PHP i MySQL. Jako, że programowanie przynosi mi coraz więcej
            satysfakcji postanowiłem pójść na profesjonalny kurs, wybrałem Backend Developer PHP z rozszerzeniem o
            JavaScript: React + Redux. Tworząc aplikację do zarządzania fermą reprodukcyjną początkowo myślałem o
            usprawnieniu swojej pracy. Sukcesywnie rozbudowując jej funkcjonalności sprawiłem, że w chwili obecnej nie
            wyobrażamy sobie bez niej pracy na fermie.
          </Typography>
        </CardContent>
        <div className={classes.chip}>
          <Chip label="PHP" />
          <Chip label="Symfony" />
          <Chip label="MySQL" />
          <Chip label="Javascript" />
          <Chip label="JQuery" />
          <Chip label="React" />
        </div>
      </div>
    </Card>
  )
}
