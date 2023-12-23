import { useState } from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/hOmEpAgE' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
