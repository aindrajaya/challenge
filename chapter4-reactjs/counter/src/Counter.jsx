import React, { Component } from "react";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <>
        <div className="box">
          <h1>{this.state.count}</h1>
        </div>
        <div className="boxCenter">
          <button className="button-5" onClick={() => this.increment()}>
            +
          </button>
          <button className="button-5" onClick={() => this.decrement()}>
            -
          </button>
        </div>
      </>
    );
  }
}
