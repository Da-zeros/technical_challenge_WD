// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();

var cors = require('cors')
app.use(cors())
 

const index = require("./routes/routes.js");
app.use("/", index);

 
// Server Started
app.listen(3001, () => console.log('My first app listening on port 3001! '));