// Cadastrar.jsx
import { useState } from "react";
import { SaveUser } from "../components/SaveUser";

export const Cadastrar = () => {
  const [list, setList] = useState([]);

  function handleSaveUser(user) {
    let newList = [...list];
    newList.push(user);
    setList(newList);
  }

  return (
    <>
      <SaveUser onAddUser={handleSaveUser} /> 
    </>
  );
};
