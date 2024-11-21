import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={increment} data-testid="increment-button">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement-button">
        Decrement
      </button>
      <button onClick={reset} data-testid="reset-button">
        Reset
      </button>
    </div>
  );
};

export default Counter;
