import React, { useState } from "react";

function Input(props) {
  const [input, setinput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submit");
    if (input) {
      props.getTodo(input);
    }
    setinput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          value={input}
        //   required
          onChange={(e) => {
            setinput(e.target.value);
            //   console.log(input);
          }}
        />
        <button className="btn btn-primary" disabled={!input}>Add</button>
      </div>
    </form>
  );
}

export default Input;
