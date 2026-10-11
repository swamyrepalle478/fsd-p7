import React, { useState } from "react";

function UserGreeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="card">
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? (
        <h3>Welcome back, John!</h3>
      ) : (
        <h3>Please log in.</h3>
      )}

      {isLoggedIn && <p>You are successfully logged in.</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default UserGreeting;
