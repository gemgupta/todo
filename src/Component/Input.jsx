import React, { useState, useEffect } from "react";

function Input(props) {
  const [input, setinput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submit");
    if (input) {
      if (props.editTodo.index === -1) {
        props.getTodo(input);
      } else {
        props.editedTodo(props.editTodo.index, input);
      }
    }

    setinput("");
  };

  useEffect(() => {
    setinput(props.editTodo.todo);
  }, [props.editTodo.todo, props.editTodo.index]);

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control "
          placeholder="Enter Todo"
          value={input}
          //   required
          onChange={(e) => {
            setinput(e.target.value);
            //   console.log(input);
          }}
        />
        <button className="btn btn-success ms-2" disabled={!input}>
          {props.editTodo.index !== -1 ? "update Todo" : "Add Todo"}
        </button>
      </div>
    </form>
  );
}

export default Input;
