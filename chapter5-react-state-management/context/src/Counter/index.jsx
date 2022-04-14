import React from "react";
import './styles.scss'

import CounterContextAPI from "./CounterContextAPI";
import { CounterContextProvider } from "./CounterContextAPI/counterContext";

const itemRemaining = 5;

// Ini menggunakan Counter Function
const CounterApp = () => {
  return(
    <CounterContextProvider>
      <main className="Application">
        <section className="Counters">
          <CounterContextAPI max={itemRemaining} min={0} step={1} />
        </section>
      </main>
    </CounterContextProvider>
  )
}

export default CounterApp