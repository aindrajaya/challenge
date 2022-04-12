import React from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterStorage");
  console.log(storage)
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
}

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: getStateFromLocalStorage(),
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this)

    //using props
    this.incrementUsingProps = this.incrementUsingProps.bind(this)
    this.decrementUsingProps = this.decrementUsingProps.bind(this)

    //using storage
    this.incrementFromLocalStorage = this.n = this.incrementFromLocalStorage.bind(this);
    this.decrementFromLocalStorage = this.n = this.decrementFromLocalStorage.bind(this);
  }

  increment() {
    this.setState(
      { count: this.state.count + 1 }
    );
  }

  incrementUsingProps() {
    const { max, step } = this.props
    this.setState((inc) => {
      if (inc.count >= max) return;
      return { count: inc.count + step }
    })
  }

  decrementUsingProps() {
    const { min, step } = this.props;
    this.setState((dec) => {
      if (dec.count === min) return;
      return { count: dec.count - step };
    });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  //using localStorage
  incrementFromLocalStorage() {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step }
      },
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("After", localStorage);
      }
    );
  };

  decrementFromLocalStorage() {
    this.setState(
      (state, props) => {
        const { min, step } = props;
        if (state.count >= min) return;
        return { count: state.count - step }
      },
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("After", localStorage);
      }
    );
  };

  render() {
    return (
      <div className="Counter">
        <p>Ini Counter Class</p>
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementUsingProps}>Increment</button>
          <button onClick={this.decrementUsingProps}>Decrement</button>
          <button onClick={this.incrementFromLocalStorage}>Increment Storage</button>
          <button onClick={this.decrementFromLocalStorage}>Decrement Storage</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;