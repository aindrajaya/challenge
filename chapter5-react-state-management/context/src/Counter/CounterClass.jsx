import React from "react";

const getStateFromLocalStorage = () => {

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

  }

  increment() {
    this.setState({count: this.state.count +1});
  }


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


    this.setState({count: 0});
  }

  //Function localStorage
  incrementFromLocalStorage(){
    this.setState(
      (state, props) => {
        const {max, step} = props;
        if(state.count >= max) return;

  }

  render(){
    return(
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementFromLocalStorage}>Increment</button>

          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    )
  }
}

export default CounterClass;