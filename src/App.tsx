import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea/Index";
import { ListItem } from "./components/ListItem/Index";
import { Item } from "./types/Item" ;


const App = () => {

  const[list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar o pão na padaria",
      done: false
    },
    {
      id:2,
      name: "comprar um bolo na padaria",
      done: true
    }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />
        {list.map((Item, index) => (
          <ListItem key={index} item={Item}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App