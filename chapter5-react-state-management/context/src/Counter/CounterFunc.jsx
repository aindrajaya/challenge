import React, {useEffect, useState} from "react";

const getStateFromLocalStorage = (defaultValue, key) => {
  const storage = localStorage.getItem(key)
  console.log(storage);
  if(storage) return JSON.parse(storage).count;
  return defaultValue;
}

const storeStateInLocalStorage = count => {
  localStorage.setItem("counterStorage", JSON.stringify({count}))
  console.log(localStorage);
}

//Custom hooks untuk mendapatkan data dari localStorage
const useLocalStorage = (initialState, key) => {
  ////Model data -> get data from localStorage
  const getLocalStorage = () => {
    const storage = localStorage.getItem(key)
    console.log(storage);
    if(storage) return JSON.parse(storage).value;
    return initialState;
  }

  //Model data -> get data from DB
  const getDatafromDB = async () => {
    try {
      const res = await fetch('your-api-endpoint')
      const data = res.json()
      return data
    } catch (error) {
      console.log(error);
    }
  }
  
  //Svae value that get from local
  const [value, setValue] = React.useState(getLocalStorage())
  console.log("before", getLocalStorage());

  //Store in local
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({value}))
  }, [value], console.log("After", value))

  return [value, setValue]
}

const CounterFunc = ({max, step, min}) => {
<<<<<<< HEAD
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
=======
  // const [count, setCount] = useLocalStorage(0, "count") //ini bukan useState
  // const [count, setCount] = useState(getStateFromLocalStorage(0))
  const [count, setCount] = useState(0) //
  console.log("before", count);

  const increment = () =>  {
    setCount(c => {
      if(c >= max){
        alert("item habis")
        return c
      } 
      return c + step
    })
  }

  //Side effect, adalah proses lain yang di jalankan selain proses utama
  useEffect(() => {
    document.title = `Your count is ${count}`//componentDidUpdate -> untuk update title, sesuai dengan state count
    console.log("after", count)
  },[count]) //dependencies, merupaka sesuatu pengubah
  
  
  // useEffect(() => {
  //   // storeStateInLocalStorage(count)
  // }, [count]) 

  const decrement = () =>  {
    if(count === min) return alert("item is zero")    
    setCount(count - step)
  }
  const reset = () => setCount(0)
>>>>>>> a01cf9ec6466c535be419f058e03addb38261d33

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