import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../servicios/api"

export function Listar() {

 const[empleados,setEmpleados]=useState([])
 const[datosCargados,setdatosCargados]=useState(false)


  const Cargar = () => {
    fetch(api)
      .then(response => response.json())
      .then(response => {      
         
        setEmpleados(response)
        setdatosCargados(true)
      })
      .catch(console.log)
  }
  useEffect(()=>{    
    console.log("entra")
    Cargar()
  },[])

  const borrar = (id) => {
    fetch(api+"?borrar="+id)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        Cargar()
      })
      .catch(console.log)
  }


  if (!datosCargados) {
    return (<div>cargando</div>)
  } else {
    return (
      <div className="card">
        <div className="card-header">
          <Link to={"/crear"} className="btn btn-success"> <span>+</span> Agregar Empleado</Link>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
               {empleados.map((empleado) => (
                <tr key={empleado.id}>
                  <td>{empleado.id}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.correo}</td>
                  <td><div className="btn-group" role="group" aria-label="">
                    <Link type="button" to={"/editar/" + empleado.id} className="btn btn-warning">Editar</Link>
                    <Link type="button" onClick={() => borrar(empleado.id)} className="btn btn-danger">Eliminar</Link>
                  </div></td>
                </tr>

              ))} 

            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted">

        </div>
      </div>
    )
  }

}