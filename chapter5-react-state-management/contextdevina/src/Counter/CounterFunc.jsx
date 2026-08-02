import React, { useState, useEffect } from "react";

//---------------------------------------------------------------------------------------------
// const getStateFromLocalStorage = (defaultValue, key) => {
//   const storage = localStorage.getItem(key)
//   console.log(storage);
//   if(storage) return JSON.parse(storage).count;
//   return defaultValue;
// }
// const storeStateInLocalStorage = (count) => {
//   localStorage.setItem("CounterStorage", JSON.stringify({count}))
//   console.log(localStorage);
// }

//custom hooks untuk mendapatkan data dari localStorage
// const useLocalStorage = (initialState, key) => {
  //Model data -> get data from localStorage
  // const getLocalStorage = () => {
  //   const storage = localStorage.getItem(key)
  //   console.log(localStorage)
  //   if(storage) return JSON.parse(storage).value;
  //   return initialState;
  // }
  // const [value, setValue] = useState(getStateFromLocalStorage(initialState, key))
  // React.useEffect(() => {
    // localStorage.setItem(key, JSON.stringify({value}))
  // }, [value])
  // return [value, setValue]
// }

// const getDataFromDB = async () => {
//   try {
//     const res = await fetch('your-api-endpoint')
//     const data = res.json()
//     return data
//   } catch (error) {
//     console.log(error);
//   }
// }
//---------------------------------------------------------------------------------------------
const CounterFunc = ({max, step, min}) => {
  const [ count, setCount ] = React.useState(0)
  // const[count, setCount] = useState(useLocalStorage(0, "count"))

  const increment = () => {
      if(count >= max) return alert("item sudah habis");
      return setCount(count + step) //boolean + number
  }
  console.log("after", count+1)

  //Side effect, proses lain yang dijalankan selain proses utama
  useEffect(() => {
    //componentDidMount -> untuk update title, sesuai dengan state count
    document.title = `Your counter is ${count}` //componentDidMount (akan update kalau ada state yang berubah)
  }, [count]) //dependencies, merupakan suatu pengubah

  useEffect(() =>{
    // storeStateInLocalStorage(count)
  }, [])

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