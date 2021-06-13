// use express to create a webserver to return categories to the front end
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const data = require('./data');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();//By calling this mongoDB uri from env variable will be fetched from .env file and the value
//mongodb://localhost/selforderkiosk will be replaced by process.env.MONGODB_URI variable

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    iseCreateIndex: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
})
//2 parameters name of model in db and new object that has schema
const Product = mongoose.model('products', new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    calorie: Number,
    category: String,
}));//Save Product and save and retrieve data for Product object
//create products by using insertMany method of mongoose
app.get('/api/products/seed', async (req,res) => {//create products in db
    const products = await Product.insertMany(data.products); //pass products in data object from data file and result const products will be saved in Product
    res.send({products}) //the response will be send as an object to frontend. next define products inside data
})

//api to get products as per categories to the front end under orderscreen
app.get('/api/products', async(req,res) => {
    //fetch category from req.query
    const {category} = req.query;
    //filter data in Product with find condition if found use products otherwise return all products
    const products = await Product.find(category ? {category} : {})
    res.send(products);
});
//create more products from ew.body the content of the request
app.post('/api/products', async (req,res) => {
    const newProduct = new Product(req.body);//re.body contains the data that user passed on this request
    //and the create a new api and save in database
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.get('/api/categories', (req, res) => res.send(data.categories));



const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`);
})