import React from "react";
import './style.scss'

//Component
import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";
import CounterFunc from "./CounterFunc";
// import CounterUseReducer
import CounterUseReducer from "./CounterUseReducer";
// import CounterContextAPI
import CounterContextAPI from "./CounterContextApi";
import { CounterContextProvider } from "./CounterContextApi/CounterContext";
// import counter redux
import CounterRedux from "./CounterRedux";
import { Provider } from "react-redux";
import store from "./CounterRedux/store";

const itemRemaining = 5;

const CounterApp = () => {
  return(
    <Provider store={store}>
      <main className="Application">
        <section className="Counters">
          {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterFunc max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterUseReducer/> */}
          {/* <CounterContextAPI max={itemRemaining} min={0} step={1}/> */}
          <CounterRedux max={itemRemaining} min={0} step={1}/>
        </section>
      </main>
    </Provider>
  );
};

export default CounterApp;