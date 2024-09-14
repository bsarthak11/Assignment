import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTodo } from "./store/reducers/TodoReducer";

function App() {
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState("");
  const [ids, setIds] = useState(0);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.TodoReducer.value);

  function HandleADDTask(e) {
    e.preventDefault();
    if (task !== "") {
      dispatch(addTask(task));
    } else {
      alert("Enter Some Value");
    }
    setTask("");
  }

  function HandleDeleteTask(id) {
    dispatch(deleteTask(id));
  }
  function HandleEditTask(id) {
    setEdit(true);
    setIds(id);
  }
  function HandleUpdate(e) {
    e.preventDefault();
    dispatch(updateTodo({ id:ids, task: updateTask }));
    setEdit(false);
  }
  return (
    <>
      {edit ? (
        <form action="">
          <input
            type="text"
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
          />
          <button onClick={HandleUpdate}>Update</button>
        </form>
      ) : (
        <div>
          <form>
            <input
              className="w-96 m-3 p-2 bg-sky-100"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="m-3 p-2 rounded-xl bg-sky-500 text-white"
              onClick={HandleADDTask}
            >
              addTODO
            </button>
          </form>
          <hr />
          <ul>
            {data.map((e, index) => {
              return (
                <li key={index} className="text-3xl">
                  {e}
                  <button
                    onClick={() => HandleDeleteTask(index)}
                    className="m-5 text-red-400"
                  >
                    X
                  </button>
                  <button onClick={() => HandleEditTask(index)}>edit</button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
