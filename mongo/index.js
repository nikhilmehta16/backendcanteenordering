const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = ' mongodb://127.0.0.1:27017';

const dbname = 'Customer';

MongoClient.connect(url,(err,client)=>{

  assert.equal(err,null);
  console.log("Connected Hurrey!!");

});
