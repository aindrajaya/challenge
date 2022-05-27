import React from "react";
import "./styles.scss";

//Component
// import CounterClass from "./CounterClass";
// import CounterFunc from "./CounterFunc";
// import CounterReducer from "./CounterUseReducer";
// import CounterContextAPI from "./CounterContextAPI";
import { Provider } from "react-redux";
// import { CounterContextProvider } from "./CounterContextAPI/counterContext";
import store from "./CounterRedux/store";
import CounterRedux from "./CounterRedux";

const itemRemaining = 5;

const CounterApp = () => {
  return (
    // <CounterContextProvider>
    <Provider store={store}>
      <main className="Application">
        <section className="Counters">
          {/* <CounterContextAPI max={itemRemaining} min={-5} step={1} /> */}
          <CounterRedux max={itemRemaining} min={-5} step={1}/>
        </section>
      </main>
    </Provider>
    // </CounterContextProvider>

    // <main className="Application">
    //   <section className="Counters">
    //     <CounterReducer/>
    //     {/* <CounterFunc max={itemRemaining} min={-5} step={1} /> */}
    //     {/* <CounterClass max={itemRemaining} min={-5} step={1} /> */}
    //   </section>
    // </main>
  );
};

export default CounterApp;
