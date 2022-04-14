import React, { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, reset} from './actions'
// import { CounterGlobalContext } from './counterContext'

export default function CounterRedux ({max, min, step}) {
  // const {state, dispatch} = useContext(CounterGlobalContext)
  // const count = state.count
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return (
    <div className="Counter">
      <h4>Counter Context Redux Devina Gunawan</h4>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment(dispatch, max, step, count)}>Increment</button>
        <button onClick={() => decrement(dispatch, min, step, count)}>Decrement</button>
        <button onClick={() => reset(dispatch, min)}>Reset</button>
      </section>
    </div>
  )
}
