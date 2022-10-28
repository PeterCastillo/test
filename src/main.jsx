import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter ,  Routes , Route } from "react-router-dom";
import { GeneralViewProvider } from "../src/context/UserContext"
import Home from './pages/Home';
import 'normalize.css'
import ProductoInfo from './pages/ProductoInfo';
import Productos from '../src/components/Productos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GeneralViewProvider>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='/home' element={<Home/>}>
          <Route index element={<Productos/>}/>
          <Route path='/home/productoDetalles/:id' element={<ProductoInfo/>}/>
        </Route>
      </Routes>
    </GeneralViewProvider>


  </BrowserRouter>


)
