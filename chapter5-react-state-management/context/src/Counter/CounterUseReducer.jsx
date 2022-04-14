import { useReducer } from "react";

const theReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1
            };
        case "decrement":
            return {
                count: state.count - 1
            };
        case "reset":
            return {
                count: 0
            };
        default:
            return state;
    }
};

const initialState = {
    count: 0
};

const counterUseReducer = () => {
    const [state, dispatch] = useReducer(theReducer, initialState);

    const increment = () => dispatch({ type: "increment" });
    const decrement = () => dispatch({ type: "decrement" });
    const reset = () => dispatch({ type: "reset" });

    return (
        <div className="Counter">
            Dari useReducer Component
            <p className="count">{state.count}</p>
            <h4>Anonymous Function</h4>
            <section className="controls">
                <button onClick={() => dispatch({ type: "increment" })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    Decrement
                </button>
                <button onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
            </section>
            <h4></h4>
        </div>
    )
}