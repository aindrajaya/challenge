import React from 'react'

export const FunctionalCounter = (props) => {
  const {count, inc, dec} = props; //desctructuring
  return (
    <div>
      <div className='box'>
          <h1>{count}</h1>
        </div>
        <div className='boxCenter'>
          {/* Mengirim props ke Button, dan menambah props baru */}
          <button className='button-5' onClick={inc}>+</button>
          <button className='button-5' onClick={dec}>-</button>
        </div>
    </div>
  )
}
