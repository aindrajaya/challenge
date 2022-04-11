import React from "react";

class CounterClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    // using props
    this.incrementUsingProps = this.incrementUsingProps.bind(this);
  };

  increment(){
    this.setState({
      count: this.state.count + 1
    });
  };

  incrementUsingProps(){
    const{max, step} = this.props
    this.setState((state) => {
      if(state.count >= max) return;
      return{count: state.count + step};
    });
  };

  decrement(){
    const{min, step} = this.props
    this.setState((dec) => {
      if(dec.count <= min) return;
      return{count: dec.count - step}
    });
    // this.setState({
    //   count: this.state.count - 1
    // });
  };

  reset(){
    this.setState({
      count: 0
    });
  };

  render(){
    return(
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.incrementUsingProps}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  };
};

export default CounterClass;