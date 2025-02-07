import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function Home() {
    navigate('/');
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");

        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        navigate ('/');
        console.log("Usuário autenticado:", data);
      } else {
        alert(data.message || "Erro ao fazer login");
      }
    } catch (error) {
      alert("Erro na conexão com o servidor");
    }
  };

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Entrar
        </Button>
        <Button onClick={Home} variant="contained" color="primary" fullWidth>
          Menu Principal
        </Button>
        
      </form>
    </section>
  );
};
