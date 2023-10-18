require('dotenv').config()
const express = require('express');
const port  = process.env.PORT;
const db = require('./db/mongoose');

const app = express();



app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})