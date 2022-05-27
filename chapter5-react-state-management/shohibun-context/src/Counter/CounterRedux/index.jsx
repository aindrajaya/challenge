import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions";

const CounterRedux = ({max, min, step}) => {
    const dispatch = useDispatch()
    const count = useSelector((store) => store.count);

  return (
    <div className="Counter">
        <h2>Counter Redux</h2>
      <p className="count">{count}</p>
      <h4>Modular Function</h4>
      <section className="controls">
        <button onClick={() => increment(dispatch, max, step, count)}>Increment</button>
        <button onClick={() => decrement(dispatch, min, step,  count)}>Decrement</button>
        <button onClick={() => reset(dispatch)}>Reset</button>
      </section>
    </div>
  );
};

export default CounterRedux;
