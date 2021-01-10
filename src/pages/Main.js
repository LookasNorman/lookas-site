import React from 'react'
import AboutMe from '../components/main/AboutMe'
import Details from '../components/main/Details'

export default function Main({ state }) {
  return (
    <>
      <AboutMe data={state.header} />
      <Details data={state.main} />
    </>
  )
}
