import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../servicios/api"

export function Crear(props) {

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  
  
  const navigate = useNavigate();
  const guardarDatosNombre = (e) => {
    setNombre(e.target.value)
  }
  const guardarDatosCorreo = (e) => {
    setCorreo(e.target.value)
  }
  const guardar = (e) => {
    e.preventDefault()
    var datos = {
      nombre: nombre,
      correo: correo
    }
    fetch(api + "?insertar", {
      method: "POST",
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response)
     
        navigate("/");       
      })
      .catch(console.log)


  }
  const Cargar = () => {
    fetch(api)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(console.log)
  }
  return (
    <div className="card">
      <div className="card-header">
        Header
      </div>
      <div className="card-body">
        <form action="" onSubmit={guardar}>
          <div className="form-group">
            <label htmlFor="nombre"></label>
            <input type="text" name="nombre" id="nombre" value={nombre} onChange={guardarDatosNombre} className="form-control" placeholder="Nombre" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Nombre</small>
            <label htmlFor="correo"></label>
            <input type="email" name="correo" id="correo" value={correo} onChange={guardarDatosCorreo} className="form-control" placeholder="Correo" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Correo</small>
          </div>
          <button type="submit" className="btn btn-primary">Guardar empleado</button>

        </form>
      </div>
      <div className="card-footer text-muted">
      </div>
    </div>
  )


}
