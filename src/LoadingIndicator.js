import React, { useState } from "react";

function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(true);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = <p>Content loaded successfully!</p>;
  }

  return (
    <div className="card">
      <h2>Loading Indicator</h2>

      {isLoading && <div className="spinner"></div>}

      {content}

      <button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? "Load Content" : "Show Loading"}
      </button>
    </div>
  );
}

export default LoadingIndicator;
