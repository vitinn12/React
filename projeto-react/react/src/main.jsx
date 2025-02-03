import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {Cadastrar} from './pages/Cadastrar.jsx'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Usuarios } from './pages/Usuarios.jsx'

const router  = createBrowserRouter([ //Essa biblioteca serve para o usuario criar rotas dentro do react
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

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

