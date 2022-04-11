import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.incrementUsingProps = this.incrementUsingProps.bind(this);
    this.decrementUsingProps = this.decrementUsingProps.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  incrementUsingProps() {
    this.setState((a) => {
      if(a.count >= this.props.max) return;
      return {count: a.count + this.props.step}
    })
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }

  decrementUsingProps() {
    this.setState((b) => {
      if (b.count <= this.props.min) return;
      return {count: b.count - this.props.step}
    })
  }

  reset() {
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