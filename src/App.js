import React from 'react'
import Temp from './Temp'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/weather' element={<Temp/>}></Route>
     </Routes>
    </div>
  )
}
