// Cadastrar.jsx
import { useState } from "react";
import { SaveUser } from "../components/SaveUser";
import { useNavigate } from "react-router-dom";  // Importando useNavigate

export const Cadastrar = () => {
  const [list, setList] = useState([]);  // Estado que mantém a lista de usuários
  const navigate = useNavigate();  // Para navegação

  function handleSaveUser(user) {
    let newList = [...list];
    newList.push(user);  // Adiciona o novo usuário à lista
    setList(newList);  // Atualiza o estado da lista

    // Após salvar, redireciona para a página de lista de usuários
    navigate("/usuarios");
  }

  return (
    <>
      <SaveUser onAddUser={handleSaveUser} />
    </>
  );
};
