import React, { useState, useEffect } from "react";
import PersonaIndividual from "./PersonaIndividual";
import axios from "axios";

function ListaPersonas() {
  const [datapersonas, setdatapersonas] = useState([]);

  useEffect(() => {
    axios.get("/api/persona/obtenerpersonas")
      .then(res => {
        setdatapersonas(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const listapersonas = datapersonas.map(persona => (
    <div key={persona.id}>
      <PersonaIndividual persona={persona} />
    </div>
  ));

  return (
    <div>
      <h2>Lista de Personas</h2>
      {listapersonas}
    </div>
  );
}

export default ListaPersonas;
