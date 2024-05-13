import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App