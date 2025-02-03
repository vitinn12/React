import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "../../index.css";

export const SaveUser = ({onAddUser}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function Salvar() {
    const data = {
      name,
      email,
    };
    console.log(data);
    onAddUser(data)
  }

  return (
    <>
      <section>
        
        <form action="">
          <h1>Cadastrar Usuario</h1>
          <nav>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </nav>
          <Button onClick={Salvar} variant="contained">Cadastrar</Button>
        </form>
      </section>
    </>
  );
};
