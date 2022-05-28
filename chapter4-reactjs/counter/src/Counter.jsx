import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    //Fill this line #1
    this.state = {
      value: 0,
    };
  }

  increment = () => {
    //Fill this line #2
    let currentValue = this.state.value;
    this.setState({
      value: currentValue + 1,
    });
  };

  decrement = () => {
    //Fill this line #3
    let currentValue = this.state.value;
    this.setState({
      value: currentValue - 1,
    });
  };

  render() {
    return (
      <>
        <div className="box">
          <h1>{this.state.value}</h1>
        </div>
        <div className="boxCenter">
          {/* <button className='button-5' onClick={() => this.incrementss()}>+</button> */}
          <button className="button-5" onClick={() => this.decrement()}>
            -
          </button>
          <button className="button-5" onClick={() => this.increment()}>
            +
          </button>
        </div>
      </>
    );
  }
}
