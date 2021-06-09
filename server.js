// use express to create a webserver to return categories to the front end
const express = require('express')
const mongoose = require ('mongoose')
const data = require('./data');
const dotenv = require('dotenv')
const app = express();

app.get('/api/categories', (req, res) => res.send(data.categories));

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`)
})