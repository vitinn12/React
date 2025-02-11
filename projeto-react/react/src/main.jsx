import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/app.css'
import './assets/cadastrar.css'
import {App} from './App.jsx'
import {Cadastrar} from './pages/Cadastrar.jsx'
import { Usuarios } from './pages/Usuarios.jsx'
import {Login} from './pages/Login.jsx'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar/>, 
  },
  {
    path: "/usuarios",
    element: <Usuarios/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

