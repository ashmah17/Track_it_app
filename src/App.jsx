import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Componenet/Landing'

function App() {
 
  return (
    <> 
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
   </BrowserRouter>
   
    </>
  )
}

export default App
