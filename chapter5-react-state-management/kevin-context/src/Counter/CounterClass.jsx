import React from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterStorage");
  console.log(storage);
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
}
class CounterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: getStateFromLocalStorage()
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    // using props
    this.incrementUsingProp = this.incrementUsingProp.bind(this)
    this.decrementUsingProp = this.decrementUsingProp.bind(this)

    // LocalStorage
    this.incrementFromLocalStorage = this.incrementFromLocalStorage.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  incrementUsingProp() {
    // destructuring props
    const { max, step} = this.props;
    this.setState((counter) => { //counter menggantikan state yang ada di constructor
      if(counter.count >= max) return; 
      return { count: counter.count + step }
    })
  }

  decrementUsingProp() {
    // destructuring props
    const { step, min } = this.props;
    this.setState((counter) => {
      if (counter.count <= min) return;
      return { count: counter.count - step }
    })
  }

  // Function Localstorage
  incrementFromLocalStorage() {
    this.setState((state, props) => {
      const {max, step} = props;
      if (state.countStorage >= max) return;
      return { count: state.countStorage + step }
    },
      (state) => {
        localStorage.setItem("counterStorage", JSON.stringify(state).count)
        console.log("After", localStorage);
      }
    )
  }

  render(){
    return(
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementFromLocalStorage}>Increment</button>
          <button onClick={this.decrementUsingProp}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;