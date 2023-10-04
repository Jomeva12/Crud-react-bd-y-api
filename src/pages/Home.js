import React, { useState } from "react";
import { Listar } from "../componentes/Listar";
import { Crear } from "../componentes/Crear";

export function Home() {
    const [empleados, setEmpleados] = useState([]);

  // Esta función actualizará la lista de empleados en el estado de Home
  const actualizarListaEmpleados = (nuevoEmpleado) => {
    // Agregar el nuevo empleado a la lista existente
    console.log("home")
    setEmpleados([...empleados, nuevoEmpleado]);
  };
    return (

        <div>
            <h1>Estoy en Home</h1>
            <Listar empleados={empleados}  />
            <Crear actualizarListaEmpleados={actualizarListaEmpleados} />
        </div>
    )
}