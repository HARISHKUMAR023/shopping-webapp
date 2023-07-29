const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let database;
async function connectTodatabase(){
  const client = await  MongoClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('online-shop');
}
function getdb(){
    if(!database){
        throw new Error('you must connect first');
    }
    return database;
}
module.exports={
    connecttoDatabase : connectTodatabase,
    getdb : getdb,
}