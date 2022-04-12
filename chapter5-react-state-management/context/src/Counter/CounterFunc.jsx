import React from "react";

const CounterFunc = ({max, step, min}) => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    if (count >= max) return alert("Sudah maximal");
    return setCount(count + 1);
  } 

  const decrement = () => {
    if (count <= min) return alert("Sudah minimal");
    return setCount(count - 1);
  } 

  const reset = () => setCount(0);

  // Side effect, adalah proses lain yang dijalankan selain proses utama
  React.useEffect(() => {
    document.title = `Your counter is: ${count}`; // componentDidMount
  }, [count]) // depedencies, merupakan suatu pengubah 

  return(
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  )
}

export default CounterFunc;