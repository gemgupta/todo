import React from "react";

function List(props) {
  const d = new Date();
  return (
    <ul className="list-group">
      {props.todo.length > 0 ? (
        props.todo.map((todo, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between mt-4 border-2 rounded-2"
            >
              {todo}
              <p>
                Date:-
                {d.getDate()}-{d.getMonth()}-{d.getFullYear()}, Time:-
                {d.getHours()}-{d.getMinutes()}
              </p>

              <div>
                <button
                  onClick={() => props.updatedTodo(index, todo)}
                  className="btn btn-primary me-2"
                  disabled={props.editTodo.index === index ? true : false}
                >
                  Edit Todo
                </button>
                <button
                  onClick={() => props.deleteHandler(todo)}
                  className="btn btn-danger"
                  disabled={props.editTodo.index === index ? true : false}
                >
                  Delete Todo
                </button>
              </div>
            </li>
          );
        })
      ) : (
        <li className="list-group-item">No Pending Todo</li>
      )}
    </ul>
  );
}

export default List;
