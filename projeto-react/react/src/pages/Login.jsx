import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    function Home () {
      navigate ('/')
    }
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    const requisicao = async (event) => {
        event.preventDefault();

        const userData = {
            email,
            password,
        }

        const response = await fetch ('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        
        if (!response.ok){
            throw new Error ('Erro ao fazer Login.')
        }
        if (data.success){
            navigate ('/')
        }

        const data = await response.json();
        alert(data.message)

    } 


    return (
        <section>
            <form onSubmit={requisicao}>
            <h1>Area de Login</h1>
                <nav>
                    <TextField
                        label = "Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label = "Senha"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                </nav>
                    
                    <button type="submit">Logar</button>
                    <Button onClick={Home} variant="contained">Menu Principal</Button>
            </form>
        </section>
    );
};