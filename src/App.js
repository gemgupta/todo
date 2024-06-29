import { useState } from "react";
import "./App.css";
import Input from "./Component/Input";
import List from "./Component/List";
function App() {
  const [todo, settodo] = useState([]);
  const [editTodo, setEditTodo] = useState({ index: -1, todo: "" });
  const [duplicate, setduplicate] = useState(true);
  const getTodo = (value) => {
    if (!todo.includes(value)) {
      settodo([...todo, value]);
      setduplicate(true);
    } else {
      setduplicate(false);
    }
  };
  const updatedTodo = (index, todo) => {
    setEditTodo({
      index,
      todo,
    });
    console.log(editTodo);
  };
  const editedTodo = (index, data) => {
    todo.splice(index, 1, data);
    settodo([...todo]);
    setEditTodo({
      index: -1,
      todo: "",
    });
  };
  const deleteHandler = (value) => {
    let filterTodo = todo.filter((todo) => todo !== value);
    // console.log(filterTodo)
    settodo([...filterTodo]);
  };
  return (
    <div className=" container w-50 m-auto">
      <h1 className=" d-flex justify-content-center mb-4">Todo App</h1>
      <Input getTodo={getTodo} editTodo={editTodo} editedTodo={editedTodo} />
      {!duplicate && <p>Todo Already in the list</p>}
      <List
        todo={todo}
        deleteHandler={deleteHandler}
        updatedTodo={updatedTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
