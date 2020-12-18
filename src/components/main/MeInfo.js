import React from 'react'
import {CardHeader} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

export default function MeInfo({data}) {

    return (
        <CardHeader title={data.title} subheader={data.subheader} />
    )
}

