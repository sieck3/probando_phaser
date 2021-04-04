
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('Server on port 3000');
})