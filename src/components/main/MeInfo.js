import React from 'react'
import { CardHeader } from '@material-ui/core'

export default function MeInfo({ data }) {
  return <CardHeader title={data.title} subheader={data.subheader} />
}
