
import React from 'react'
import {Box, Card, CardActionArea, Typography} from 'material-ui/core'
import TouchAppIcon from '@material-ui/icons'
import Logo from '../components/Logo'
export default function HomeScreen() {
    return (
       <Card>
           <CardActionArea>
               <Box>
                   <Box>
                       <Typography component ="h6" variant="h6">
                           Fast and Easy
                       </Typography>
                       <Typography component ="h1" variant="h1">
                           Order <br/> & pay <br/> here
                       </Typography>
                       <TouchAppIcon fontSize = "large"></TouchAppIcon>
                   </Box>
                   <Box>
                       <Logo>Large</Logo>
                       <Typography component="h5" variant="h5">
                           Touch To Start
                       </Typography>
                                                         
                   </Box>
               </Box>
           </CardActionArea>
       </Card>
    )
}
