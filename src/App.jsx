import { useState } from 'react'
import './App.css'
import CompShowGranjas from './crud/ShowGranjas'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompCreateGranja from './crud/CreateGranja'
import CompEditGranja from './crud/EditGranja'
import CompHome from '../Home/home'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= { <CompHome /> }/>
          <Route path='/admin' element= { <CompShowGranjas /> }/>
          <Route path='/create' element= { <CompCreateGranja /> }/>
          <Route path='/edit/:id' element= { <CompEditGranja /> }/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
