import React from "react";

class CounterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this)

    //using props
    this.incrementUsingProps = this.incrementUsingProps.bind(this)
    this.decrementUsingProps = this.decrementUsingProps.bind(this)
  }

  increment(){
    this.setState(
      {count: this.state.count + 1}
    );
  }

  incrementUsingProps(){
    const {max, step} = this.props
    this.setState((c) => {
      if(c.count >= max) return;
      return {count: c.count + step}
    })
  }

  decrement(){
    //Tambahkan batasan count === min, menggunakan props
    this.setState({count: this.state.count - 1});
  }

  decrementUsingProps(){
    const {min, step} = this.props
    this.setState((c) => {
      if(c.count === min) return;
      return {count: c.count - step}
    })
  }

  reset(){
    this.setState({count: 0});
  }

  render(){
    return(
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementUsingProps}>Increment</button>
          <button onClick={this.decrementUsingProps}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;