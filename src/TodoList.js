import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: true },
    { id: 3, text: "Build a Project", completed: false }
  ]);

  const [task, setTask] = useState("");

  function addTodo(e) {
    e.preventDefault();

    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task.trim(),
        completed: false
      }
    ]);

    setTask("");
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div className="card">
      <h2>Todo List</h2>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
            </label>

            <button
              className="remove-btn"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p>Total tasks: {todos.length}</p>
    </div>
  );
}

export default TodoList;
