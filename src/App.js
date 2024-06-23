import { useState } from "react";
import "./App.css";
import Input from "./Component/Input";
import List from "./Component/List";
function App() {
  const [todo, settodo] = useState([]);
  const [duplicate, setduplicate] = useState(true);
  const getTodo = (value) => {
    if (!todo.includes(value)) {
      settodo([...todo, value]);
      setduplicate(true)
    } else {
      setduplicate(false);
    }

    // console.log(typeof value)
  };
  const deleteHandler = (value) => {
    let filterTodo = todo.filter((todo) => todo !== value);
    // console.log(filterTodo)
    settodo([...filterTodo]);
  };
  return (
    <div className=" container w-50 m-auto">
      <p className="">Todo App</p>
      <Input getTodo={getTodo} />
      {!duplicate && <p>Todo Already in the list</p>}
      <List todo={todo} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
