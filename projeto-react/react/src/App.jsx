import { useNavigate } from "react-router-dom"
import './assets/App.css'


export function App() {
  const navigate = useNavigate()
  function Cadastrar (){
    navigate ('/cadastrar')
  }  
  function Usuarios (){
    navigate ('/usuarios')
  }  


  return (
    <main>
      <h1>Pagina Principal</h1>

      <div className="links">
        <a class="cadastrar" onClick={Cadastrar}> Cadastrar Usuario</a>
        <a class="cadastrar" onClick={Usuarios}> Usuarios Cadastrados</a>
      </div>


    </main>
  )
}




