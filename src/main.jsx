import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter ,  Routes , Route } from "react-router-dom";
import { GeneralViewProvider } from "../src/context/UserContext"
import Private from './pages/Private';
import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GeneralViewProvider>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='/ProductosUser' element={<Private/>}/>
      </Routes>
    </GeneralViewProvider>


  </BrowserRouter>


)
