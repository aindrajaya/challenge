import React from "react";
import './styles.scss'

//Component
import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";

const CounterApp = () => {
  return(
    <main className="Application">
      <section className="Counters">
        <CounterClass />
        {/* <CounterFunc /> */}
      </section>
    </main>
  )
}

export default CounterApp