import { useRef } from "react"


function Home() {
  const inputref = useRef();

  function Salvar(){
    console.log(inputref.current.value)
  }

  return (
    <>
      <div>
        <h1>Cadastrar Usuario</h1>
        <form action="">
          <input type="email" name="email" id="" placeholder="Digite o email" />
          <input type="password" name="senha" id="" placeholder="Digite a senha" />
          <button onClick={Salvar}>Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default Home
