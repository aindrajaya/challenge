import React from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterState")
  console.log(storage);
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
}

const CounterFunc = ({ max, step, min }) => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    if (count >= max) return alert("sudah mencapai batas maksimal");
    return setCount(count + 1)
  }

  const decrement = () => {
    if (count <= min) return alert("sudah mencapai batas minimal");
    return setCount(count - 1)
  }

  //Side effect, proses lain yang dijalankan selain proses utama
  React.useEffect(() => {
    document.title = `Your count is:  ${count}` //componentDidMount = untuk update title
  }, [count]) //dependencies, sesuatu pengubah

  const reset = () => setCount(0)

  return (
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