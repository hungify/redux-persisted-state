import React from 'react';

type CounterProps = {
  count: number;
};

function Counter({ count }: CounterProps) {
  return (
    <div>
      <h1>Counter {count}</h1>
    </div>
  );
}

export default Counter;
