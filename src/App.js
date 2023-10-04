import React from "react"
import { Routes,Route,BrowserRouter as Router,Link } from "react-router-dom"
import { Listar } from "./componentes/Listar"
import { Editar } from "./componentes/Editar"
import { Crear } from "./componentes/Crear"
import { Home } from "./pages/Home"
import "./App.css"
function App(){
 
  

    return(
      <Router>

        <nav className="nav justify-content-start">
          <Link to={"/"} className="nav-link active">Home</Link>
          <Link to={"/listar"} className="nav-link active">Listar</Link>
          <Link to={"/crear" }className="nav-link">Crear</Link>
          <Link to={"/editar"} className="nav-link">Editar</Link>
        </nav>
        <div className="container">
        <Routes>
        <Route exact path="/" Component={Home}></Route>
          <Route  path="/listar" Component={Listar}> </Route>
          <Route  path="/crear" Component={Crear}> </Route>
          <Route  path="/editar/:id" Component={Editar}> </Route>
        </Routes>
        </div>
      </Router>
    )
  
}
export default App;