import React from "react";
import './styles.scss'

//Component
// import CounterClass from "./CounterClass";
import { CounterContextProvider } from "./CounterContextAPI/counterContext";
import CounterContextAPI from "./CounterContextAPI";

const itemRemaining = 5;

const CounterApp = () => {
  return (
    <CounterContextProvider>
      <main className="Application">
        <section className="Counters">
          {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterFunc max={itemRemaining} min={0} step={1}/> */}
          <CounterContextAPI max={itemRemaining} min={0} step={1} />
        </section>
      </main>
    </CounterContextProvider>
  )
}

export default CounterApp