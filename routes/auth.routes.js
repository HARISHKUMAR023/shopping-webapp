const express = require('express');
const authcontroller = require('../controllers/auth.controllers');
const router = express.Router();
router.get('/signup',authcontroller.getsignup);
router.get('/login',authcontroller.getlogin);
router.post('/signup',authcontroller.signup);
module.exports=router;