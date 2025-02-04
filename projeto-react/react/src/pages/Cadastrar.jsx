
import { useState } from "react";
import { SaveUser } from "../components/SaveUser";
import { useNavigate } from "react-router-dom"; 

export const Cadastrar = () => {
  const [list, setList] = useState([]);  
  const navigate = useNavigate();  

  function handleSaveUser(user) {
    let newList = [...list];
    newList.push(user); 
    setList(newList); 

    navigate("/usuarios");
  }

  return (
    <>
      <SaveUser onAddUser={handleSaveUser} />
    </>
  );
};
