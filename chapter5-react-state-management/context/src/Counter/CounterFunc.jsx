import React from "react";

const CounterFunc = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return(
    <div className="Counter">
      <p className="count">0</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  )
}

export default CounterFunc;