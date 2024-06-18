const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const uniqid = require('uniqid')
const Schema = mongoose.Schema


const schemaPersona = new Schema({

    nombre: { type: String, required: true },
    apellido: String,
    fecha_nacimiento: String,
    numero_documento: String,
    genero: String,
    telefono: String,
    direccion: String,
    email: String,
    idpersona: { type: String, required: true },
})

const ModeloPersona = mongoose.model('persona', schemaPersona)
////RUTA DE PRUEBAS
router.post('/agregarpersona', (req, res) => {
    console.log("entre administradores")
    const nuevaPersona = new ModeloPersona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento,
        numero_documento: req.body.numero_documento,
        genero: req.body.genero,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email,
        idpersona: req.body.idpersona
    })
})
nuevaPersona.save()
.then(() => {
    res.status(201).send('Persona Resgistrada Correctamente')
})
.catch((error) => {
    console.err(error)
    res.status(500).send('Error al Registrar la Persona')
})

    router.get('/obtenerpersonas', async(req, res) =>{
        try {
            const personas = await ModeloPersona.find({})
            res.send(personas)
        } catch (error) {
            res.status(500).send(error)
        }
    })
module.exports = router