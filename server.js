const express = require('express')
const app = express;

app.request(express.static('dist'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});