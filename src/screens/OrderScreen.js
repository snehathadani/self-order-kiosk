import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, List, ListItem, Typography } from '@material-ui/core';
import { AddAlert } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react'
import { listCategories, listProducts } from '../actions';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles'


/*
First create a box this will be a root box
Then inside that box create a main box
Then inside the main box create a Grid container. This Grid has 2 columns 1st column for categories & 2nd column for foods 
Then fill categories for backend inside Grid, for that make a List*/

export default function OrderScreen () {
    //console.log("called once")
    const [categoryName, setCategoryName] = useState('')
    const styles = useStyles();
    const {state, dispatch} = useContext(Store)
    const {categories, loading, error} = state.categoryList;
    const {products, loading:loadingProducts, error: errorProducts} = state.productList
    console.log(state)
    useEffect(()=> {
        console.log("uuuu")
        if(!categories){
          listCategories(dispatch);
        } else {
          listProducts(dispatch, categoryName)
        }
       
    }, [dispatch, categoryName, categories])
    const  categoryHandler = (name) => {
      setCategoryName(name)
      listProducts(dispatch, categoryName) //dispatch comes from react context
    }
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
                     onClick = {() => categoryHandler(category.name)}
                    >
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    gutterBottom
                    className={styles.title}
                    variant="h2"
                    component="h2"
                    >
                    {categoryName || 'Main Menu'}
                  </Typography>
                   <Grid container spacing={1}>
                     {loadingProducts ? (
                       <CircularProgress/>
                       ) : errorProducts ? (
                         <Alert severity = "error"> {errorProducts}</Alert>
                       ) :(
                         products.map((product) => (
                           <Grid item md ={6}>
                           <Card className={styles.card} >
                          <CardActionArea>
                            <CardMedia
                              component = "img"
                              alt={product.name}
                              image = {product.image}
                              className ={styles.media}>

                            </CardMedia>
                          </CardActionArea>
                          <CardContent>
                          <Typography
                    gutterBottom
                    variant="body2"
                    color="textPrimary"
                    component="p"
                    >
                    {product.name}
                  </Typography>
                  <Box className={styles.cardFooter}>
                   <Typography
                        variant= "body2"
                        color ="textSecondary"
                        component="p"
                        >
                          {product.calorie} Calories
                    </Typography>
                    <Typography
                        variant= "body2"
                        color ="textSecondary"
                        component="p"
                        >
                          {product.price}
                    </Typography>         
                  </Box>
                          </CardContent>
                           </Card>
                           </Grid>
                           )
                           )
                       )}
                   </Grid>
                </Grid >
                </Grid>
            </Box>
        </Box>
    )
}

