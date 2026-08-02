import React, { useContext } from "react";
import { increment, decrement, reset } from "./actions";
import { useDispatch, useSelector } from "react-redux";

export default function CounterRedux({ max, min, step }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);

  return (
    <div className="Counter">
      <h4>Counter Redux API</h4>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment(dispatch, max, step, count)}>
          Increment
        </button>
        <button onClick={() => decrement(dispatch, min, step, count)}>
          Decrement
        </button>
        <button onClick={() => reset(dispatch, min)}>Reset</button>
        <button onClick={() => decrement(dispatch, min, step, count)}>
          Decrementssssssssssssss
        </button>
      </section>
    </div>
  );
}
