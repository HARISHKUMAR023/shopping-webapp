const User =require('../models/user.model');
function getsignup(req,res){
    res.render('customer/auth/signup');
    //...
}
async function signup(req,res){
const user = new User(req.body.email,
    req.body.password,
    req.body.name,
    req.body.street,
    req.body.pincode,
    req.body.city
    );
    await user.signup();
    res.redirect('/login');
}
function getlogin(req,res){
    res.render('customer/auth/login');
    //..
}
module.exports={
    getsignup:getsignup,
    getlogin:getlogin,
    signup:signup
}