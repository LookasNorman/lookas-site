import * as React from 'react'
import CardHeader from '@material-ui/core/CardHeader'

export const MainInfo = ({data}) => {
    return (
        <CardHeader title={data.title} subheader={data.subheader} />
    )
}