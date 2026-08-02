import React from 'react';

const FunctionalCounter = (props) => {
const {count, inc, dec} = props
return (
    <>
        <div className='box'>
            <h1>{count}</h1>
        </div>
        <div className='boxCenter'>
            <button className='button-5' onClick={inc}>+</button>
            <button className='button-5' onClick={dec}>-</button>
        </div>
    </>
    )
}

export default FunctionalCounter;
