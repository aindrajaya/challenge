import React from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterStorage")
  console.log(storage)
  if(storage) return JSON.parse(storage).count
  return 0; 
}

class CounterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: getStateFromLocalStorage(),
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    //using props
    this.incrementUsingProps = this.incrementUsingProps.bind(this);
    this.decrementUsingProps = this.decrementUsingProps.bind(this);

    //Local Storage
    this.incrementFromLocalStorage = this.incrementFromLocalStorage.bind(this)
    this.decrementFromLocalStorage = this.decrementFromLocalStorage.bind(this)
  }

  increment() {
    this.setState({count: this.state.count +1});
  }

  incrementUsingProps() {
    const {max, step} = this.props
    this.setState((state) => {
      if(state.count >= max) return;
      return {count: state.count + step}
    })
  }
  // data.map(a=>a)

  decrement() {
    this.setState({count: this.state.count -1});
  }
  decrementUsingProps() {
      //Tambahkan batasan count === min, menggunakan props
      const {min, step} = this.props
      this.setState((state) => {
        if(state.count === min) return;
        return {count: state.count - step}
      })
  }
 
  reset() {
    this.setState({count: 0});
  }

  //Function localStorage
  incrementFromLocalStorage(){
    this.setState(
      (state, props) => {
        const {max, step} = props;
        if(state.count >= max) return;
        return{count: state.count + step}
      },
      //fungsi callback = componentDidMount
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("After", localStorage);
      }
    )
  }

  decrementFromLocalStorage(){
    this.setState(
      (state, props) => {
        const {min, step} = props;
        if(state.count === min) return;
        return{count: state.count - step}
      },
      //fungsi callback = componentDidMount
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state))
        console.log("Before", localStorage);
      }
    )
  }

  render(){
    return(
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementFromLocalStorage}>Increment</button>
          <button onClick={this.decrementFromLocalStorage}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;