import React, { useContext } from 'react'
import {increment, decrement, reset} from './actions'
import { CounterGlobalContext } from './counterContext'

export default function CounterContextAPI ({max, min, step}) {
  const {state, dispatch} = useContext(CounterGlobalContext)
  const count = state.count

  return (
    <div className="Counter">
      <h4 style={{paddingLeft:"20px"}}>Counter Context API Devina Gunawan</h4>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment(dispatch, max, step, count)}>Increment</button>
        <button onClick={() => decrement(dispatch, min, step, count)}>Decrement</button>
        <button onClick={() => reset(dispatch, min)}>Reset</button>
      </section>
    </div>
  )
}
