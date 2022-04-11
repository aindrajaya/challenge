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
<<<<<<< HEAD
        <CounterClass max={itemRemaining} min={0} step={1} />
=======
        <CounterClass max={itemRemaining} min={0} step={1}/>
>>>>>>> d0014cac4ff53b0f85e3e93fa8e5914c1a7f583c
        {/* <CounterFunc /> */}
      </section>
    </main>
  )
}

export default CounterApp