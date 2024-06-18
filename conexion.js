const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudreact');

const objetodb = mongoose.connection

objetodb.on('connected',() => {console.log('Conectado a MongoDB')})
objetodb.on('error',() => {console.log('Error al conectar a MongoDB')})

module.exports = mongoose;
