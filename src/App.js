import React from "react";
import UserGreeting from "./UserGreeting";
import LoadingIndicator from "./LoadingIndicator";
import TodoList from "./TodoList";
import RegistrationForm from "./RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React Concepts Demonstration</h1>

      <UserGreeting />
      <LoadingIndicator />
      <TodoList />
      <RegistrationForm />
    </div>
  );
}

export default App;
