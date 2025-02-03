
import React from "react";
import { TableUsers } from "../components/TableUsers";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Usuarios = ({ list = [] }) => { 
  const navigate = useNavigate()
  function Home (){
    navigate ('/')
  }  
  return (
    <div>
      <h1>Lista de Usuários Cadastrados</h1>
      <TableUsers list={list} />
      <Button variant="contained" onClick={Home} > Pagina Principal</Button>
    </div>
  );
};
