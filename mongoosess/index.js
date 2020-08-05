  const mongoose = require('mongoose');
  const MenuCards = require('./models/CustomerSchema');

  const url = "mongodb://127.0.0.1:27017/menu";

  const connect = mongoose.connect(url);

  connect.then((db)=>{
    console.log ("Connected by mongoose");

   var newItem = MenuCards({
        hall: 'nvdkkv',
        id: 'test',
        title : 'nfgfgfhn',
        image :'ffsvd',
        subtitle : 'fd'
    });

    newItem.save()
        .then((item) => {
            console.log(item);
          })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
  });
