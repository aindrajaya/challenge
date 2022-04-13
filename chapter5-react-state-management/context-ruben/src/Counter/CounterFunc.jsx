import React from "react";

const getStateFromLocalStorage = (defaultValue, key) => {
  const storage = localStorage.getItem(key);
  console.log(storage);
  if(storage) return JSON.parse(storage).count;
  return defaultValue;
};

const storeStateInLocalStorage = (count) => {
  localStorage.setItem("counterStorage", JSON.stringify({count}));
  console.log(localStorage);
};

// custom hook
const useLocalStorage = (initialState, key) => {
  // model data
  const getLocalStorage = () => {
    const storage = localStorage.getItem(key)
    console.log(storage);
    if(storage) return JSON.parse(storage).value;
    return initialState;
  };

  // model data
  const getDatafromDB = async () => {
    try {
      const res = await fetch('your-api-endpoint')
      const data = res.json()
      return data
    } catch (error) {
      console.log(error);
    };
  };

  //Svae value that get from local
  const [value, setValue] = React.useState(getLocalStorage())
  console.log("before", getLocalStorage());

  //Store in local
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify({value}))
  }, [value], console.log("After", value))

  return [value, setValue]
};

const CounterFunc = ({max, step, min}) => {
  const [count, setCount] = React.useState(0);
  console.log("before", count);

  // const increment = () => {
  //   if(count >= max) return alert("item sudah habis");
  //   return setCount(count + step);
  // };

  const increment = () =>  {
    setCount(c => {
      if(c >= max){
        alert("item habis")
        return c
      } 
      return c + step
    });
  };

  React.useEffect(() => {
    document.title = `Your counter is: ${count}`
  }, [count]);

  // React.useEffect(() => {
  //   useLocalStorage(0, count);
  // }, [count])

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