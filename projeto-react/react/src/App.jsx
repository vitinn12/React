import { SaveUser } from "./components/SaveUser"
import { TableUser } from "./components/TableUser"

export const App = () => {
  const [list, setList] = useState ([])

  function HandleSaveUser(user) {
    let Lista = [...List]
    Lista.push(user)
    setList(Lista)
  }
  return (
    <>
      <SaveUser onAddUser={HandleSaveUser}/>
      <TableUser List ={List}/>


    </>
  )
}



