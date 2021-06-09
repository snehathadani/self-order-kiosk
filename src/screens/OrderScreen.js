import { Avatar, Box, CircularProgress, Grid, List, ListItem } from '@material-ui/core';
import { AddAlert } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect } from 'react'
import { listCategories } from '../actions';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles'


/*
First create a box this will be a root box
Then inside that box create a main box
Then inside the main box create a Grid container. This Grid has 2 columns 1st column for categories & 2nd column for foods 
Then fill categories for backend inside Grid, for that make a List*/

export default function OrderScreen () {
    console.log("called once")
    const styles = useStyles();
    const {state, dispatch} = useContext(Store)
    const {categories, loading, error} = state.categoryList;
    console.log(state)
    useEffect(()=> {
        console.log("uuuu")
        listCategories(dispatch)
    }, [dispatch])
    return (
        <Box className = {styles.root}>
            <Box className = {styles.main}>
                <Grid container>
                <Grid item md={2}>
                <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem button>
                    <Logo></Logo>
                  </ListItem>
                  { categories.map((category) => (
                    <ListItem
                      key={category.name}
                      button
                     
                    >
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
                </Grid>
                <Grid item md={10}>
                    Food List
                </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

