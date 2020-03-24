const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');
const flash = require("express-flash");
const session = require("express-session");

app.use(session({
    secret: 'authors',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(flash());

app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect('mongodb://localhost/authors');

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));