import { useNavigate } from "react-router-dom"

export function App() {
  const navigate = useNavigate()
  function onSeeDetailsClick (){
    navigate ('/cadastrar')
  }  


  return (
    <>
      <h1>Pagina Principal</h1>
      <a href="" onClick={onSeeDetailsClick}> Cadastrar</a>
    </>
  )
}




