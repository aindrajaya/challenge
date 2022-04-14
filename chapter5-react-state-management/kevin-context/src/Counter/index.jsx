import React from "react";
import './styles.scss'

//Component
// import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";
// import CounterContextAPI from "./CounterContextAPI";
// import { CounterContextProvider } from "./CounterContextAPI/counterContext";
import CounterUseReducer from "./CounterUseReducer";

// const itemRemaining = 5;

// Ini menggunakan Counter Function
// const CounterApp = () => {
//   return(
//     <CounterContextProvider>
//       <main className="Application">
//         <section className="Counters">
//           {/* <CounterClass max={itemRemaining} min={0} step={1} /> */}
//           {/* <CounterFunc max={itemRemaining} min={0} step={1} /> */}
//           <CounterContextAPI max={itemRemaining} min={0} step={1} />
//         </section>
//       </main>
//     </CounterContextProvider>
//   )
// }
// }

// Ini CounterUseReducer
const CounterApp = () => {
  return(
      <main className="Application">
        <section className="Counters">
          <CounterUseReducer />
        </section>
      </main>
  )
}
export default CounterApp