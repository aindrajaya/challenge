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
<<<<<<< HEAD
    <div className="container">
      <Counter />
=======
    <div className='container'>
      {/* <ClassCounter /> */}
       {/* Mengirim props berupa state dan methods dari App.js ke FunctionalCounter */}
      <FunctionalCounter count={count} inc={increment} dec={decrement}/>
>>>>>>> b4883b88b2ad8be6df7e41797adba7cf3df07914
    </div>
  );
}

export default App;
