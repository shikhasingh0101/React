import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import CreateProduct from './pages/CreateProduct'

function App() {


  return (
    <>
        {/* <CreateProduct/> */}

        <BrowserRouter>
        <Routes>
          <Route path='form' element={<CreateProduct/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>}/>

          
          </Routes></BrowserRouter>
    </>
  )
}

export default App
