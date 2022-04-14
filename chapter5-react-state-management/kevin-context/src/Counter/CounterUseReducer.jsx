import { useReducer } from "react";

// 2. Reducer - (Mengubah 2 value menjadi 1)
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
        count: state.count - 1
      }
    case "reset":
      return {
        count: 0
      }
    default:
      return state;
  }
}

// 3. Store - (Tempat penyimpanan state yang akan dipakai oleh aplikasi)
const initialState = { count: 0 }

export default function CounterUseReducer({ max, min, step }) {
  // 1. Actions - (increment, decrement, reset)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="Counter">
            <p className="count">{state.count}</p>
            <h4 className="count" align="center">Counter Use Reduce</h4>
            <section className="controls">
                {/* 1. Actions - (increment, decrement, reset) */}
                <button onClick={() => dispatch({type: "increment"})}>Increment</button>
                <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
                <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            </section>
        </div>
    )
}
