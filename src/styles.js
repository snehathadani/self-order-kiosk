//to create styles in material ui import makestyles
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme)=> ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    navy:{
        backgroundColor: '#003080',
    },
    red: {
        backgroundColor: '#ff2040',
        color: '#ffffff',
    },
    largeLogo: {
        height:100
    },
    logo: {
        height:50
    },
    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        color: '#ffffff',
    },
    center: {
        flex: 'flex',
        overflow: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    green: {
        backgroundColor: '#00b020'
    },
    cards: {
        display:'flex', // putting two items next to each other that's why flex
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: 10, //create space between two cards so add padding
    },
    space: {
        padding: 10, //to add space between cards
    },
    media: {
        width: 200,
    },
}))             