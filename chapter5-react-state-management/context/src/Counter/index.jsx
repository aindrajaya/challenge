import React from 'react';
import './styles.scss';

//Component
// import CounterClass from "./CounterClass";
<<<<<<< HEAD
import CounterFunc from './CounterFunc';
=======
import CounterFunc from "./CounterFunc";
import { CounterContextProvider } from "./CounterContextAPI/counterContext";
import CounterContextAPI from "./CounterContextAPI";
>>>>>>> 42dc2f47c17b21980693fb94e509d6717a93904f

const itemRemaining = 5;

const CounterApp = () => {
<<<<<<< HEAD
  return (
    <main className="Application">
      <section className="Counters">
        {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}
        <CounterFunc max={itemRemaining} min={0} step={1} />
      </section>
    </main>
  );
};
=======
  return(
    <CounterContextProvider>
      <main className="Application">
        <section className="Counters">
          {/* <CounterClass max={itemRemaining} min={0} step={1}/> */}
          {/* <CounterFunc max={itemRemaining} min={0} step={1}/> */}
          <CounterContextAPI max={itemRemaining} min={0} step={1}/>
        </section>
      </main>
    </CounterContextProvider>
  )
}
>>>>>>> 42dc2f47c17b21980693fb94e509d6717a93904f

export default CounterApp;
