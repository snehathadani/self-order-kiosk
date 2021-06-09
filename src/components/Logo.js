import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import {useStyles} from '../styles'

export default function Logo(props) {
    const styles = useStyles();
    return (
        <div>
            <img 
            src = '/images/logo.png' 
            alt = 'Food Order'
            className={ props.large? styles.largeLogo : styles.logo } />
        </div>
    )
}
