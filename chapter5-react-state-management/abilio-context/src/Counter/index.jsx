import React from "react";
import './styles.scss'

//Component
// import CounterClass from "./CounterClass";
import CounterFunc from "./CounterFunc";
import { CounterContextProvider } from "./CounterContextAPI/counterContext";
import CounterContextAPI from "./CounterContextAPI";
import CounterRedux from "./CounterRedux";
import { Provider } from "react-redux";
import store from "./CounterRedux/store";

const itemRemaining = 5;

// context api
// const CounterApp = () => {
//   return(
//     <CounterContextProvider>
//     <main className="Application">
//       <section className="Counters">
//         {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}

//         {/* <CounterFunc max={itemRemaining} min={0} step={1}/> */}

//         <CounterContextAPI max={itemRemaining} min={0} step={1}/>
//       </section>
//     </main>
//     </CounterContextProvider>
//   )
// }

//contex redux
const CounterApp = () => {
  return(
    <Provider store={store}>
      <main className="Application">
        <section className="Counters">
          <CounterRedux max={itemRemaining} min={0} step={1} />
        </section>
      </main>
    </Provider>
  )
}

export default CounterApp