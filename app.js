
const path = require('path');
const express = require('express');
const database = require('./data/database');
const authRoutes=require('./routes/auth.routes');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(authRoutes);
database.connecttoDatabase().then(function(){
    app.listen(3000);
}).catch(function(error){
    console.log('failed to connect the database');
    console.log(error);
 })
