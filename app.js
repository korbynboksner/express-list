const express = require('express');
const app = express();
const route = require('./routes.js')
app.use(express.json());

app.use("/item", route);



























app.listen(3000, function(){
    console.log('App on port 3000');
  })