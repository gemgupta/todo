import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      {props.todo.length > 0 ? (
        props.todo.map((todo, index) => {
         return <li key={index} className="list-group-item d-flex justify-content-between">
            {todo}
            <div>
                <button onClick={()=>props.deleteHandler(todo)} className="btn btn-danger">Delete</button>
            </div>
          </li>;
        })
      ) : (
        <li className="list-group-item">No Pending Todo</li>
      )}
    </ul>
  );
}

export default List;
