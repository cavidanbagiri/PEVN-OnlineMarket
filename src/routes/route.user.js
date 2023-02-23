
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/controller.user');

router.get('/register',(req, res, next)=>{
    try{
        UserController.registerUser().then((data)=>{
            console.log('User Can Register : ',data);
            res.json('User Can Regist');
        }).catch((err)=>{
            console.log('User Registraion Error : ',err);
        })
    }
    catch(err){
        console.log('User Registration Error : ',err);
    }
})

module.exports = router;