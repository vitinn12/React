import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Usuarios = ({ list }) => {
  const navigate = useNavigate();

  function Home () {
    navigate ('/')
  }
  return (
    <div>
      <h1>Lista de Usuários Cadastrados</h1>
      {list && list.length > 0 ? (
        <TableUsers list={list} />
      ) : (
        <p>Nenhum usuário cadastrado</p>
        
      )}
      <div className="menu">
        <Button onClick={Home} variant="contained">Menu Principal</Button>
      </div>
    </div>
  );
};
