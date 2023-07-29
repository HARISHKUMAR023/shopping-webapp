const bcrypt = require('bcryptjs');
const db=require('../data/database')


class User{
    constructor(email,password,name,street,pincode,city){
        
        this.email = email;
        this.password = password;
        this.name = name;
        
        this.address={
            street:street,
            pincode:pincode,
            city:city
        }
       
    }
   async signup(){
      const hashpassword = await  bcrypt.hash(this.password,12);
await db.getdb().collection('users').insertOne({
    emai:this.email,
    password:hashpassword,//?
    name:this.name,
    address:this.address
});
    }
}
module.exports=User;