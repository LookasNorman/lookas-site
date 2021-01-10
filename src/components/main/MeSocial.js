import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GitHubLogo from '../../media/GitHubLogo.png'
import LinkedinLogo from '../../media/LinkedinLogo.png'

const useStyles = makeStyles({
  technologies: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '0.5vw',
    flexWrap: 'wrap',
  },
  tech: {
    display: 'flex',
    justifyContent: 'center',
    width: '7vw',
    minWidth: '100px',
    margin: '0.5vw',
  },
  social: {
    width: '100px',
  },
})

export default function MeSocial({ data }) {
  const classes = useStyles()

  return (
    <div className={classes.technologies}>
      {data.linkedin && (
        <a href={data.linkedin} target="_blank" rel="noreferrer">
          <img src={LinkedinLogo} alt="LinkedIn Profile" className={classes.social} />
        </a>
      )}
      {data.github && (
        <a href={data.github} target="_blank" rel="noreferrer">
          <img src={GitHubLogo} alt="GitHub Profile" className={classes.social} />
        </a>
      )}
    </div>
  )
}
