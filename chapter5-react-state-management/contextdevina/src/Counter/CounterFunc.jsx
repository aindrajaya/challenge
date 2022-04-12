import React, { useState } from "react";

const CounterFunc = ({max, step, min}) => {
  // const [ count, setCount ] = React.useState(0)
  const[count, setCount] = useState(0)

  const increment = () => {
      if(count >= max) return alert("item sudah habis");
      return setCount(count + step) //boolean + number
  }
  console.log("after", count+1)

  //Side effect, proses lain yang dijalankan selain proses utama
  React.useEffect(() => {
    //componentDidMount -> untuk update title, sesuai dengan state count
    document.title = `Your counter is ${count}` //componentDidMount (akan update kalau ada state yang berubah)
  }, [count]) //dependencies, merupakan suatu pengubah

  // const decrement = () => setCount(count - 1)
  const decrement = () => {
    if(count === min) return alert("sudah mencapai batas minimum");
    return setCount(count - step)
  }
  console.log("before", count-1)

  const reset = () => setCount(0)
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