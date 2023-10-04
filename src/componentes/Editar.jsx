import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../servicios/api"
export function Editar() {
  const param = useParams("id")
  const[nombre,setNombre]=useState("")
  const[correo,setCorreo]=useState("")
  const navigate=useNavigate()
  const consultar = () => {
    fetch(api+"?consultar=" + param.id)
      .then(response => response.json())
      .then((response) => {
        if (!nombre) {
          setNombre(response[0].nombre);
        }
        if (!correo) {
          setCorreo(response[0].correo);
        }
    
        })

      .catch(console.log)
  }
  useEffect(() => {
    consultar()
  }

  )

const handleNombreChange = (e) => {
  setNombre(e.target.value);
};

  const handleCorreoChange = (e) => {
    console.log(e.target.value)
    setCorreo(e.target.value);
  };
  const actualizar = (e) => {
    e.preventDefault()
    var datos = {
      id: param.id,
      nombre: nombre,
      correo: correo
    }
    fetch(api+"?actualizar", {
      method: "POST",
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then((response) => {
        navigate("/")
      })

  }
  return (
    <div className="card">
      <div className="card-header">Editar</div>
      <div className="card-body">
        <form action="" onSubmit={actualizar}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={nombre} onChange={handleNombreChange} className="form-control" placeholder="Nombre" aria-describedby="helpId" />

            <small id="helpId" className="text-muted">
              Nombre
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input
              type="text"
              name="correo"
              value={correo}
              id="correo"
              onChange={handleCorreoChange}
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
            <small id="helpId" className="text-muted">
              Correo
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
        </form>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
}