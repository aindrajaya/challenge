import React from 'react';
import './App.css';
import { FunctionalCounter } from './pages/FunctionalCounter';
// import Counter from './pages/ClassCounter';

function App() {
  //Declare the state and method, and also init the value of state
  let [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count++);
  }

  const decrement = () => {
    setCount(count--);
  }

  return (
    <div className='container'>
      {/* <ClassCounter /> */}
       {/* Mengirim props berupa state dan methods dari App.js ke FunctionalCounter */}
      <FunctionalCounter count={count} inc={increment} dec={decrement}/>
    </div>
  );
}

export default App;
