
import { Button, TextField } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const SaveUser = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, seTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, email, cpf, telefone, senha }),
    });

    const data = await response.json();
    alert(data.message);

  };
  // const navigate = useNavigate();

  // function Home(){
  //   navigate ('/');
  // }

  return (
    <section>
        <form onSubmit={handleSubmit}>

        <h1>Cadastrar Usuário</h1>
        <nav>
          <TextField
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </nav>
        <button type="submit">Enviar</button>

        </form>
    </section>
  );
};
