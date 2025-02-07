
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
        nome,
        cpf,
        telefone,
        email,
        password
    };


    const response = await fetch('http://localhost:5000/signup', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), 
    });

    const data = await response.json();
    alert(data.message);
    navigate ('/')

  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
      <h1>Cadastrar Usuário</h1>

        <nav>
          <TextField
            label="nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            label="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="cpf"
            variant="outlined"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <TextField
            label="telefone"
            variant="outlined"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <TextField
            label="password"
            variant="outlined"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
            required
          />


        </nav>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
