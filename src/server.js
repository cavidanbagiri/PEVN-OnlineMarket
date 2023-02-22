
const express = require('express');
const app = express();

//const model = require('./models');

app.get('/',(req, res)=>{
    res.send('Hello world');
})



app.listen(3000, ()=>{
    console.log('Listening 3000 Port');
});