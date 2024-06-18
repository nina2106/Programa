import React, { useState } from "react"
import uniqid from 'uniqid'
import axios from 'axios'

function AgregarPersona() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [fecha_nacimiento, setFechaNacimiento] = useState('')
  const [numero_documento, setNumeroDocumento] = useState('')
  const [genero, setGenero] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')

  function agregarPersona() {

      var persona = {
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha_nacimiento,
      numero_documento: numero_documento,
      genero: genero,
      telefono: telefono,
      direccion: direccion,
      email: email,
      idpersona: uniqid()
    }
    console.log(persona)
    axios.post('/api/persona/agregarpersona', persona)
    .then(res=>{
      alert(res.data)
    })
    .catch(err=>{
      console.log(err)
    })

   
  }

  return (
    <div className="container">
      <h2>Agregar Persona</h2>
      <form onSubmit={agregarPersona}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_nacimiento" className="form-label">Fecha de Nacimiento</label>
          <input type="date" className="form-control" id="fecha_nacimiento" value={fecha_nacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="numero_documento" className="form-label">Número de Documento</label>
          <input type="text" className="form-control" id="numero_documento" value={numero_documento} onChange={(e) => setNumeroDocumento(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Género</label>
          <input type="text" className="form-control" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={AgregarPersona} className="btn btn-success">Enviar Datos</button>
      </form>
    </div>
  );
}

export default AgregarPersona;
