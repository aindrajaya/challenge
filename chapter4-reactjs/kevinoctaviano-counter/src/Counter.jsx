import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props);
    //Fill this line #1
    this.state = { count: 0 }
  }

  increment = (data) => {
    //Fill this line #2
    this.setState({ count: this.state.count + data })
  }

  decrement = (data) => {
    //Fill this line #3
    this.setState({ count: this.state.count - data })
  }

  render() {
    return (
      <>
        <div className='box'>
          <h1>{this.state.count}</h1>
        </div>
        <div className='boxCenter'>
          <button className='button-5' onClick={() => this.increment(1)}>+</button>
          <button className='button-5' onClick={() => this.decrement(1)}>-</button>
        </div>
      </>
    )
  }
}
