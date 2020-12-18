import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'

const useStyles = makeStyles({
    header:{

    },
    main:{

    },
    footer:{
        display:'flex',
        justifyContent:'center',
        padding:'1vw',
        borderTop:'1px solid #999',
        borderBottom:'1px solid #999',
    },
})

export default function App({state}) {

    const classes = useStyles()

    return (
        <>

            <header>
                <Header header={state.header} />
            </header>

            <main>
                <Main main={state.main} />
            </main>

            <footer className={classes.footer}>
                FOOTER...
            </footer>

        </>
    )
}
