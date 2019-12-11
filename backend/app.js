
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');

const app = express();

//Handling CORS issues
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Using body parser for json data
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);

module.exports = app;