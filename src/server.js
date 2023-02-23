
const express = require('express');
const app = express();

// Activate Model
require('./models');

// Import Routers
const { userRouter } = require('./routes'); 

app.use('/user',userRouter);


app.listen(3000, ()=>{
    console.log('Listening 3000 Port');
});