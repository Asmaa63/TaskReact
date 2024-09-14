import React, { useState } from 'react';
import './CounterComponent.css';

function CounterComponent() {
    const [count, setCount] = useState(1);
  return (
    <div className="ContainerCounter">
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

export default CounterComponent