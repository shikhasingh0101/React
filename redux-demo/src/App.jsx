import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/about/About.jsx'
import Home from './pages/home/Home.jsx'
import Services from './pages/services/Services.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    
     
    <BrowserRouter>


        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>

          
          </Routes></BrowserRouter>

    </>
  )
}

export default App
