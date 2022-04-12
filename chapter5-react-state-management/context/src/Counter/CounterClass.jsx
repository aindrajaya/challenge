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

<<<<<<< HEAD
    //using storage
    this.incrementFromLocalStorage = this.n = this.incrementFromLocalStorage.bind(this);
    this.decrementFromLocalStorage = this.n = this.decrementFromLocalStorage.bind(this);
=======
    //Local Storage
    this.incrementFromLocalStorage = this.incrementFromLocalStorage.bind(this)
>>>>>>> bd18bddde28cd9383f3124a8caa6ef754fbb0e22
  }

  increment() {
    this.setState(
      { count: this.state.count + 1 }
    );
  }

<<<<<<< HEAD
  incrementUsingProps() {
    const { max, step } = this.props
    this.setState((inc) => {
      if (inc.count >= max) return;
      return { count: inc.count + step }
=======
  incrementUsingProps(){
    const {max, step} = this.props //menggunakan destructuring
    this.setState((c) => { //c itu bisa diubah apapun, dia menggantikan this.state, seperti fungsi map()
      if(c.count >= max) return;
      return {count: c.count + step}
>>>>>>> bd18bddde28cd9383f3124a8caa6ef754fbb0e22
    })
  }

  decrementUsingProps() {
    const { min, step } = this.props;
    this.setState((dec) => {
      if (dec.count === min) return;
      return { count: dec.count - step };
    });
  }

<<<<<<< HEAD
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
=======
  decrementUsingProps(){
    const {min, step} = this.props //menggunakan destructuring
    this.setState((c) => { //c itu bisa diubah apapun, dia menggantikan this.state, seperti fungsi map()
      if(c.count === min) return;
      return {count: c.count - step}
    })
  }

  reset(){
    this.setState({count: 0});
  }

  //Function localStorage
  incrementFromLocalStorage(){
    this.setState(
      (state, props) => {
        const {max, step} = props;
        if(state.count >= max) return;
        return {count: state.count + step}
      },
      //Fungsi callback -> componentDidMount
      () => {
        localStorage.setItem("counterStorage", JSON.stringify(this.state));
        console.log("After", localStorage);
      }
    );
  }

  render(){
    return(
>>>>>>> bd18bddde28cd9383f3124a8caa6ef754fbb0e22
      <div className="Counter">
        <p>Ini Counter Class</p>
        <p className="count">{this.state.count}</p>
        <section className="controls">
<<<<<<< HEAD
          <button onClick={this.incrementUsingProps}>Increment</button>
          <button onClick={this.decrementUsingProps}>Decrement</button>
          <button onClick={this.incrementFromLocalStorage}>Increment Storage</button>
          <button onClick={this.decrementFromLocalStorage}>Decrement Storage</button>
=======
          <button onClick={this.incrementFromLocalStorage}>Increment</button>
          <button onClick={this.decrementUsingProps}>Decrement</button>
>>>>>>> bd18bddde28cd9383f3124a8caa6ef754fbb0e22
          <button onClick={this.reset}>Reset</button>
        </section >
      </div >
    )
  }
}

export default CounterClass;