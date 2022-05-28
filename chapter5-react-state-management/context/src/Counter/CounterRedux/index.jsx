import React, { useContext } from 'react'
import { increment, decrement, reset } from './action'
// import { CounterGlobalContext } from './counterContext'
import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, reset } from '../CounterRedux/action'

export default function CounterContextAPI({ max, min, step }) {
    // const { state, dispatch } = useContext(CounterGlobalContext)
    // const count = state.count
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    return (
        <div className="Counter">
            <h4>Counter Context API</h4>
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={() => increment(dispatch, max, step, count)}>Increment</button>
                <button onClick={() => decrement(dispatch, min, step, count)}>Decrement</button>
                <button onClick={() => reset(dispatch, min)}>Reset</button>
            </section>
        </div>
    )
}
