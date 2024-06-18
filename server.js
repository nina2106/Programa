const express = require('express');
const app = express();
const archivoDB = require('./conexion')
const bodyParser = require('body-parser');



// Importar rutas
const rutaPersona = require('./rutas/persona')

// Configuración Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas
app.use('/api/persona',rutaPersona);

app.get('/', (req, res) => {
    res.send("Ahora usted ingreso al servidor del BackEnd");
});

// Configuración del servidor
app.listen(5000, function() {
    console.log('Servidor funcionando correctamente');
});
