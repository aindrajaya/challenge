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
<<<<<<< HEAD
  React.useEffect(() => {
    document.title = `counter ke ${count}`
    //componentDidMount -> untuk update title, sesuai dengan state count
  }, [count]) //dependencies, merupaka sesuatu pengubah
  
  // const decrement = () =>  setCount(count - 1)
  const decrement = () => {
    if (count === min) return alert('Nilai sudah minimal');
    return setCount(count - step)
=======
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
>>>>>>> 85be699c8a1b6463de53417fb1fdd0c8c6c2d06d
  }
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