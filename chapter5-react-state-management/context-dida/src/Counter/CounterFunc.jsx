import { useEffect, useState } from "react";

const CounterFunc = (props) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    if(count >= props.max) return alert("item sudah habis");
    setCount(count + props.step)
  }

  const decrement = () => {
    if(count === props.min) return alert("item sudah penuh");
    setCount(count - props.step)
  }
  
  const reset = () => setCount(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

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