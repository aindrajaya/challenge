import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = { count: 0 }
  }

  increment = (data) => {

    this.setState({ count: this.state.count + data })
  }

  decrement = (data) => {
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
