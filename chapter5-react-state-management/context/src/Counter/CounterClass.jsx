import React from "react";

class CounterClass extends React.Component {
  render(){
    return(
      <div className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;