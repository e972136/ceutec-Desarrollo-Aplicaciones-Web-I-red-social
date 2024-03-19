import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { InicioSesion } from './components/InicioSesion'
import { Historial } from './components/Historial'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
 <BrowserRouter>
        <Routes>
            <Route path='/' element={<InicioSesion/>}>  </Route>
            <Route path='/historial/:id' element={<Historial/>}>  </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
