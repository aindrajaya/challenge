import React from 'react';
import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

// React ada 2 Component
// 1. Class Component
class ContohClassComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: [
        {
          name: "car 1",
          year: 2000,
          merk: "Toyota"
        },
        {
          name: "car 2",
          year: 2002,
          merk: "Honda"
        }
      ]
    }
    console.log(this.state.cars)
  }

  render() {
    return(
      <div>
        Class component
        {this.state.cars.map((a, id) => (
        <div key={id}>
          {a.name}
        </div>
        ))}
      </div>
    )
  }
}

//2. Function Component
const FunctionComponent =() => {
  const [count, setCount] = React.useState(0)
  const [cars2, setCars2] = React.useState([
    {
      name: "car 1",
      year: 2000,
      merk: "Toyota"
    },
    {
      name: "car 2",
      year: 2002,
      merk: "Honda"
    }
  ])
  console.log(cars2);

  return(
    <div>
      Function Component
      {cars2.map((a, id) => (
        <div key={id}>
          {a.name}
        </div>
      ))}
    </div>
  )
}

const root = createRoot(
  document.getElementById('root')
)
root.render(<App/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
