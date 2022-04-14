import { useContext } from "react";
import { CounterGlobalContext } from "./counterContext";
import { increment, decrement, reset } from "./actions";

const CounterContextAPI = ({max, min, step}) => {
  const {state, dispatch} = useContext(CounterGlobalContext);
  const count = state.count

  return (
    <div className="Counter">
      <h2>Dari Context API</h2>
      <p className="count">{count}</p>
      {/* <h4>Anonymous Function</h4>
      <section className="controls">
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </section> */}
      <h4>Modular Function</h4>
      <section className="controls">
        <button onClick={() => increment(dispatch, max, step, count)}>Increment</button>
        <button onClick={() => decrement(dispatch, min, step, count)}>Decrement</button>
        <button onClick={() => reset(dispatch, min)}>Reset</button>
      </section>
    </div>
  );
};

export default CounterContextAPI;
