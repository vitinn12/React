import { useState } from "react"
import { SaveUser } from "../components/SaveUser"
import { TableUser } from "../components/TableUser"

export const Cadastrar = () => {
  const [list, setList] = useState([])

  function handleSaveUser(user) {
    let newList = [...list]
    newList.push(user)
    setList(newList)
  } 
  return (
    <>
  
      <SaveUser onAddUser={handleSaveUser}/>
      <TableUser List = {list}/>
    </>
  )
}