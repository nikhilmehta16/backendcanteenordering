const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MenuCardschema = new Schema ({
  hall :{
    type : "string",
    required : true,
  },

  id :{
    type : "string",
    required : true,
  },

  title :{
    type : "string",
    required : true,
  },

  image :{
    type : "string",
    required : true,
  },

  subtitle :{
    type : "string",
    required : true,
  }
});
var MenuCards = mongoose.model('MenuCard', MenuCardschema);

module.exports = MenuCards;
