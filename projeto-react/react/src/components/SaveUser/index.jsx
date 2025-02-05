
// import { Button, TextField } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const SaveUser = () => {
  // const navigate = useNavigate();

  // function Home(){
  //   navigate ('/');
  // }

  return (
    <section>
        <form action="http://localhost:3000/signup" method="post">

        {/* <h1>Cadastrar Usuário</h1>
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
        </nav> */}

            <div>
                Nome: <input type="text" name="nome"/>

            </div>
            
            <div>
                CPF: <input type="text" name="cpf"/>

            </div>
            <div>
                Telefone: <input type="text" name="telefone"/>
            </div>
            <div>
                E-mail: <input type="email" name="email"/>
            </div>
            <div>
                Senha: <input type="password" name="senha"/>
            </div>
            <div>
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    </section>
  );
};
