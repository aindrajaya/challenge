import React from 'react';

const FunctionCounter = (props) => {
    const [count, setCount] = React.useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <div className='box'>
                <h1> {count} </h1>
            </div>
            <div className="boxCenter">
                <div className="button-5" onClick={increment}>+</div>
                <div className="button-5" onClick={decrement}>-</div>
            </div>
        </div>
    )
}
export default FunctionCounter