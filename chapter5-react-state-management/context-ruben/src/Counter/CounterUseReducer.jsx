import { useReducer } from "react";

// 2. reducer - (mengubah 2 value menjadi satu)
const theReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return{
                count: state.count + 1
            }
        case "decrement":
            return{
                count: state.count - 1
            }
        case "reset":
            return{
                count: 0
            }
        default:
            return state;
    };
};

// 3. store - (tempat penyimpanan)
const initialState = {
    count: 0
};

const CounterUseReducer = () => {
    // 1. actions - (increment, decrement, reset)
    const [state, dispatch] = useReducer(theReducer, initialState);

    // actions
    const increment = () => dispatch({type: "increment"});
    const decrement = () => dispatch({type: "decrement"});
    const reset = () => dispatch({type: "reset"});

    return(
        <div className="Counter">
            <p className="count">{state.count}</p>
            <h4>Anonymous Function</h4>
            <section className="controls">
                {/* 1. actions - (increment, decrement, reset) */}
                <button onClick={() => dispatch({type: "increment"})}>Increment</button>
                <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            </section>
            <h4>Modular Function</h4>
            <section className="controls">
                {/* 1. actions - (increment, decrement, reset) */}
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </div>
    );
};

export default CounterUseReducer;