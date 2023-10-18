require('dotenv').config()
const express = require('express');
const port  = process.env.PORT;
const db = require('./db/mongoose');

const app = express();

app.use(express.json());



app.use('/', require('./routes/index'));

app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})