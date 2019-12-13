
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');
const gifsRoutes = require('./routes/gifs');
const path = require('path');

const app = express();

//Handling CORS issues
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Allow our app get access to static folders such as CSS/IMAGE folders
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

//Using body parser for json data
app.use(bodyParser.json());

//Access routes for incoming requests
app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);
app.use('/gifs', gifsRoutes);

module.exports = app;