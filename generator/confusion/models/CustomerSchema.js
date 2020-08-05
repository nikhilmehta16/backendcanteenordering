const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const HallSchema = new Schema  ({
  label :{
    type : String
  },
  value :{
    type : Number
  }
});
const MenuCardschema = new Schema ({
  hall : HallSchema,



  title :{
    type : String,
    required : true,
  },

  image :{
    type : Array,
    
  },

  description  :{
    type : String,
    required : true,
  },
  price : {
    type : String,
  }
});
var CustomerSchema = mongoose.model('MenuCard', MenuCardschema);
/*
{
  "title": "Rgfv",
  "price": "55",
  "description": "C",
  "hall": {
    "label": "Hall 8",
    "value": 8
  },
  "image": []
}
*/

module.exports = CustomerSchema;
