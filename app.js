const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');

const app = express();

// Use body-parser
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);// added
  next();
});

app.use('/feed', feedRoutes);

// mongodb > githubsearch -> dillips ->  393ZdrYv001NCV0n
// mongodb+srv://dillips:393ZdrYv001NCV0n@cluster0.j4k7n.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb+srv://dillips:<password>@cluster0.j4k7n.mongodb.net/<dbname>?retryWrites=true&w=majority
let db_url = 'mongodb+srv://dillips:393ZdrYv001NCV0n@cluster0.j4k7n.mongodb.net/codechallenge?retryWrites=true&w=majority';
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  result => {
    app.listen(3000);
    console.log('node started at port 3000.')
  }
).catch(err => console.log(err));
