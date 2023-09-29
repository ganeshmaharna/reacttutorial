import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  const deleteTodo=(index)=>{
      console.log(index);
      const newTodo=[...todos];
      newTodo.splice(index,1);
      setTodos(newTodo);
  }
  

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h1>Todo List</h1>
        </div>
        <div className="row justify-content-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo} type="submit">
            Add Task
          </button>
        </div>
        <div className="row justify-content-center">
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button>Edit</button>
                <button onClick={(e)=>deleteTodo(e)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
