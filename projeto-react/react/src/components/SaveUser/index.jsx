
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SaveUser = ({ onAddUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSaveUser() {
    const data = { name, email };
    onAddUser(data); 
    navigate('/'); 
  }
  function Home(){
    navigate ('/');
  }

  return (
    <section>
      <form action="">
        <h1>Cadastrar Usuário</h1>
        <nav>
          <TextField
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </nav>
        <Button onClick={handleSaveUser} variant="contained">Cadastrar</Button>
        <Button onClick={Home} variant="contained">Menu Principal</Button>
      </form>
    </section>
  );
};
