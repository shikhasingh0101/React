import Products from './pages/products/Products.jsx';
import CreateProduct from './pages/create-product/CreateProduct.jsx'; 
import NotFound from './pages/not-found/NotFound'
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import UpdateProduct from './pages/update-product/UpdateProduct.jsx';

function App() {
  return (
    <>

      <BrowserRouter>

          <Routes>
            <Route path= '' element={<Products/>}/>
            <Route path= "/products" element={<Products/>} />
            <Route path= "/create-product" element={<CreateProduct/>} />
            <Route path= "/update-product/:id" element={<UpdateProduct/>} />
            <Route path= '*' element={<NotFound/>} />

          </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
