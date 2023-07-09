import { useState } from 'react' 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Room from './Room'
import Viewer from './Viewer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home />} />   
       <Route  path='/room/:roomId' element={<Room />} />  
       <Route path='/viewer' element={<Viewer />} />  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
