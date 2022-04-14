import React from "react";
import './styles.scss'

import CounterContextAPI from "./CounterContextAPI";
<<<<<<< HEAD
import { CounterContextProvider } from "./CounterContextAPI/counterContext";
=======
import { Provider } from "react-redux";
import store from "./CounterRedux/store";
import CounterRedux from "./CounterRedux";
>>>>>>> aindrajaya-main

const itemRemaining = 5;

// Ini menggunakan Counter Function
const CounterApp = () => {
  return(
    // <CounterContextProvider>
    <Provider store={store}>
      <main className="Application">
        <section className="Counters">
<<<<<<< HEAD
          <CounterContextAPI max={itemRemaining} min={0} step={1} />
=======
          {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterFunc max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterContextAPI max={itemRemaining} min={0} step={1}/> */}
          <CounterRedux max={itemRemaining} min={0} step={1}/>
>>>>>>> aindrajaya-main
        </section>
      </main>
    </Provider>
      
    // </CounterContextProvider>
  )
}

export default CounterApp