import React, { Component } from 'react'

export default class ClassCounter extends Component {
  constructor(props){
    super(props);
    //Fill this line #1
    this.state = {
      count: 0
    }
  }

  increment = (data) => {
    //Fill this line #2
    this.setState({
      count: this.state.count + data
    })
  }

  decrement = () => {
    //Fill this line #3
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <>
        <div className='box'>
          <h1>{this.state.count}</h1>
        </div>
        <div className='boxCenter'>
          <button className='button-5' onClick={() => this.increment(1)}>+</button>
          <button className='button-5' onClick={this.decrement}>-</button>
        </div>

        {/* Navigasi nanti pakai react-Router, jangan lupa install dulu react-routernya */}
        <nav>
          Counter Functional
        </nav>
      </>
    )
  }
}