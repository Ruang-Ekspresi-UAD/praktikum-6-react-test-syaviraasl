import React, { useState } from 'react';

// Counter Component
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button data-testid="increment-button" onClick={() => setCount(count + 1)}>Increment</button>
      <button data-testid="decrement-button" onClick={() => setCount(count - 1)}>Decrement</button>
      <button data-testid="reset-button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

// Greeting Component
// latihan.js
export function Greeting({ name }) {
  return <div data-testid="greeting-message">Hello, {name}</div>;
}

// AlertButton Component
export const AlertButton = ({ message }) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button data-testid="alert-button" onClick={handleClick}>
      Show Alert
    </button>
  );
};
