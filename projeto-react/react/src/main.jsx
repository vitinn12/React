import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {Cadastrar} from './pages/Cadastrar.jsx'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";

const router  = createBrowserRouter([ //Essa biblioteca serve para o usuario criar rotas dentro do react
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Cadastrar",
    element: <Cadastrar/>, 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

