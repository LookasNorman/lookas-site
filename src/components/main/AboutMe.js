import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import LKPhoto from '../../media/LKPhoto.jpg'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import { Tooltip } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '1rem',
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
    maxHeight: 200,
    height: 'auto',
    width: 'auto',
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  tooltip: {
    width: '92px',
    height: '36px',
    borderRadius: '18px',
    backgroundColor: 'lightgray',
  },
}))

export default function AboutMe() {
  const classes = useStyles()
  const data = [
    {
      title: 'Łukasz Konieczny',
      subheader: 'PHP Backend Developer',
      text: [
        'Junior PHP Backend Devloperem z podstawową znajomością frontend. Programuję w fraemworku Symfony 3.4 i 4.4. Z fraemworków frontend posiadam podstawową znajomość React.',
        'W dotychczasowej karierze zawodowej zawsze starałem się wykorzystać technologie do poprawy wydajności pracy. Początkowo było to Excel z VBA później PHP i MySQL. Jako, że programowanie przynosi mi coraz więcej satysfakcji postanowiłem pójść na profesjonalny kurs, wybrałem Backend Developer PHP z rozszerzeniem o JavaScript: React + Redux. Tworząc aplikację do zarządzania fermą reprodukcyjną początkowo myślałem o usprawnieniu swojej pracy. Sukcesywnie rozbudowując jej funkcjonalności sprawiłem, że w chwili obecnej nie wyobrażamy sobie bez niej pracy na fermie.',
      ],
      tooltip: [
        {
          text: '+48 669 905 464',
          icon: <PhoneIcon style={{ fill: 'orange' }} />,
        },
        {
          text: 'lookasziebice@gmail.com',
          icon: <EmailIcon style={{ fill: 'orange' }} />,
        },
      ],
      chip: ['PHP', 'MySQL', 'Symfony', 'JavaScript', 'JQuery', 'Scrum', 'React'],
    },
  ]

  return data.map((item, key) => (
    <Card key={key} className={classes.root}>
      <img className={classes.cover} src={LKPhoto} alt="Profile" />
      <div className={classes.details}>
        <CardHeader title={item.title} subheader={item.subheader} />
        <CardContent className={classes.content}>
          {item.text.map((item, key) => (
            <Typography variant="body2" color="textPrimary" component="p" align="justify" key={key}>
              {item}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          {item.tooltip.map((item, key) => (
            <Tooltip key={key} title={<h3>{item.text}</h3>} interactive className={classes.tooltip}>
              {item.icon}
            </Tooltip>
          ))}

          {/*<Tooltip title={<h3>lookasziebice@gmail.com</h3>} className={classes.tooltip}>*/}
          {/*  <EmailIcon  />*/}
          {/*</Tooltip>*/}
        </CardActions>
        <div className={classes.chip}>
          {item.chip.map((item) => (
            <Chip label={item} key={item} />
          ))}
        </div>
      </div>
    </Card>
  ))
}
