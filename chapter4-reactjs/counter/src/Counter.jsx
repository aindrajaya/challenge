import React, { Component, useState } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     //Fill this line #1
//     this.state = { data: 0 };
//   }

//   increment = () => {
//     //Fill this line #2
//     this.setState({ data: this.state.data + 1 });
//   };

//   decrement = () => {
//     //Fill this line #3
//     this.setState({ data: this.state.data - 1 });
//   };

//   render() {
//     return (
//       <>
//         <div className="box">
//           <h1>{this.state.data}</h1>
//         </div>
//         <div className="boxCenter">
//           <button className="button-5" onClick={() => this.increment()}>
//             +
//           </button>
//           <button className="button-5" onClick={() => this.decrement()}>
//             -
//           </button>
//         </div>
//       </>
//     );
//   }
// }

function Counter() {
  const [data, setData] = useState(0);

  function increment() {
    setData(data + 1);
  }

  function decrement() {
    setData(data - 1);
  }
  return (
    <>
      <div className="box">
        <h1>{data}</h1>
      </div>
      <div className="boxCenter">
        <button className="button-5" onClick={increment}>
          +
        </button>
        <button className="button-5" onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
