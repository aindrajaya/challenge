import React from "react";

const CounterFunc = ({max, step, min}) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    if(count >= max) return alert("item sudah habis");
    return setCount(count + step);
  };

  React.useEffect(() => {
    document.title = `Your counter is: ${count}`
  }, [count]);

  const decrement = () => {
    if(count === min) return alert("item sudah habis");
    return setCount(count - step);
  };

  const reset = () => setCount(0);

  return(
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