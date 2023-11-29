import { useState } from 'react'
import './App.css'
import CompShowGranjas from './crud/ShowGranjas'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompCreateGranja from './crud/CreateGranja'
import CompEditGranja from './crud/EditGranja'
import CompInicio from './inicio-prueba/Inicio'



function App() {
  const [count, setCount] = useState(0)
/*cree una rtua de inicio para mostrarles como traer los datos de la DB con axios, trae el nombre
y el precio, (la idea es que tambien traiga la imagen, cuando sepa como se hace...). 
El componente Inicio es solo a manera de ejemplo.  */
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= { <CompShowGranjas /> }/>
          <Route path='/create' element= { <CompCreateGranja /> }/>
          <Route path='/edit/:id' element= { <CompEditGranja /> }/>
          <Route path='/inicio' element= { <CompInicio /> }/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
