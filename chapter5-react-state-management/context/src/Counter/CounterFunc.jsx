import React from "react";

const CounterFunc = (props) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((count) => {
      if (count >= props.max) return;
      return count + props.step;
    });
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default CounterFunc;
