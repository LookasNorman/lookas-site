import React from 'react'
import {CardHeader} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

export default function MeInfo({meInfo}) {

    return (
        <CardHeader title={meInfo.title} subheader={meInfo.subheader} />
    )
}

