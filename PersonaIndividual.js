import React from "react";



function PersonaIndividual({ persona }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <ul className="list-group">
                        <li className="list-group-item">{persona.idpersona}</li>
                        <li className="list-group-item">{persona.nombre}</li>
                        <li className="list-group-item">{persona.apellido}</li>
                        <li className="list-group-item">{persona.fecha_nacimiento}</li>
                        <li className="list-group-item">{persona.numero_documento}</li>
                        <li className="list-group-item">{persona.genero}</li>
                        <li className="list-group-item">{persona.telefono}</li>
                        <li className="list-group-item">{persona.direccion}</li>
                        <li className="list-group-item">{persona.email}</li>
                    </ul>
                    <link to={`/editarpersona/$persona.idpersona}`}>
                        <button className="btn btn-success">Editar</button>
                    </link>

                    &nbsp;
                    <button className="btn btn-success">Eliminar</button>
                    <hr className="mt-3"></hr>
                </div>

            </div>

        </div>
    )
}

export default PersonaIndividual;