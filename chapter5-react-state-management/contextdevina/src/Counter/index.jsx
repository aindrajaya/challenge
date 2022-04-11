import React from "react";
import './style.scss'

//Component
import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";

const itemRemaining = 5;

const CounterApp = () => {
  return(
    <main className="Application">
      <section className="Counters">
        <CounterClass max={itemRemaining} min={0} step={1}/>
        {/* <CounterFunc /> */}
      </section>
    </main>
  )
}

export default CounterApp