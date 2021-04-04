
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.set('port', process.env.PORT || 5000);


app.use(express.static('public'));

// app.listen(5000, () => {
//     console.log('Server on port 5000');
// })

module.exports = app;
