import React from "react";
import './styles.scss'

//Component
// import CounterClass from "./CounterClass";
// import { CounterContextProvider } from "./CounterContextAPI/counterContext";
// import CounterContextAPI from "./CounterContextAPI";
import { Provider } from "react-redux";
import store from "./CounterRedux/store";
import CounterRedux from "./CounterRedux";

const itemRemaining = 5;

const CounterApp = () => {
  return (
    // <CounterContextProvider>
    <Provider store={store}>
      <main className="Application">
        <section className="Counters">
          {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterFunc max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterContextAPI max={itemRemaining} min={0} step={1}/> */}
          <CounterRedux max={itemRemaining} min={0} step={1} />
        </section>
      </main>
    </Provider>

    // </CounterContextProvider>
  )
}

export default CounterApp