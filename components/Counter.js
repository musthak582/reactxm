import React, { useState } from 'react';
import './Counter.css'; // Import the CSS styles

const Counter = () => {
  // State to track the count value
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Simple Counter</h2>
      {/* Display the current count */}
      <div className="count-display">{count}</div>

      {/* Buttons for increment, decrement, and reset */}
      <div className="button-container">
        <button className="counter-button increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="counter-button decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="counter-button reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
