import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, updateCounter] = useState(0);

  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter - 1);
  }

  function handleReset() {
    updateCounter(0);
  }

  useEffect(() => {
    console.log('component lifecycle');
  }, [counter]);

  return (
    <>
      <div className='box'>
        <h1>{counter}</h1>
      </div>
      <div className='boxCenter'>
        <button className='button-5' onClick={handleIncrement}>+</button>
        <button className='button-5' onClick={handleDecrement}>-</button>
        <button className='button-5' onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
