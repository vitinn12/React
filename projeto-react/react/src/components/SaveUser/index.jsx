import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "../../index.css";

export const SaveUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSaveUser() {
    const data = {
      name,
      email,
    };
    console.log(data);
  }

  return (
    <>
      <section>
        <form action="">
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
          <Button>Salvar</Button>
        </form>
      </section>
    </>
  );
};
