import { useState } from 'react';
import './App.css';
// import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';

function App() {
  let [counter, setCount] = useState(0);

  let increment = () => {
    return counter++
  }

  let decrement = () => {
    return counter--
  }
  return (
    <div className='container'>
      {/* <Counter /> */}
      <FunctionalCounter count={counter} inc={increment} dec={decrement}/>
    </div>
  );
}

export default App;
