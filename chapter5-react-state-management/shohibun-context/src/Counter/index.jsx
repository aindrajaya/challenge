import React from "react";
import './styles.scss'

//Component
// import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";
// import CounterReducer from "./CounterUseReducer";
import CounterContextAPI from "./CounterContextAPI";
import { CounterContextProvider } from "./CounterContextAPI/counterContext";
const itemRemaining = 5;

const CounterApp = () => {
  return(
    <CounterContextProvider>
      <main className="Application">
        <section className="Counters">
          <CounterContextAPI  max={itemRemaining} min={-5} step={1} />
        </section>
      </main>
    </CounterContextProvider>

    // <main className="Application">
    //   <section className="Counters">
    //     <CounterReducer/>
    //     {/* <CounterFunc max={itemRemaining} min={-5} step={1} /> */}
    //     {/* <CounterClass max={itemRemaining} min={-5} step={1} /> */}
    //   </section>
    // </main>
  )
}

export default CounterApp