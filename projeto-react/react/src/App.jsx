import { useState } from "react"
import { SaveUser } from "./components/SaveUser"
import { TableUser } from "./components/TableUser"

export const App = () => {
  const [list, setList] = useState([])

  function HandleSaveUser(user) {
    let newList = [...list]
    newList.push(user)
    setList(newList)
  } 
  return (
    <>
      <SaveUser onAddUser = {HandleSaveUser}/>
      <TableUser List = {list}/>
    </>
  )
}



