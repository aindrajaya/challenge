import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

//React ada 2 Component
// 1. Class Component - Statefull (manipulate state)
class ContohClassComponent extends React.Component { //Pemanggilan React.Component untuk memastikan class component ini adalah turuan dari Component react
  //Pembuatan constructor untuk memastikan state pada komponen ini sudah ada ketika dia di tampilkan pertama kali
  constructor(props){
    super(props)
    this.state = {
      cars: [
       {
         name: "car 1",
         year: 2000,
         merk: "Toyota"
       },{
        name: "car 2",
        year: 2002,
        merk: "Honda"
       }
      ],
      count: 0
    }
    console.log(this.state.cars)
    console.log(this.state.count)
  }

  //Method di class komponen untuk mengupdate data dari state komponen class
  increment = () => {
    this.setState({
      //Pemanggilan state harus memakai this.state, supaya merujuk pada state class component ini
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <div>
        Class Component
        {/* Mapping data array di jsx */}
        {this.state.cars.map((a, id) => (
        <div key={id}>
          {a.name}
        </div>
        ))}
      </div>
    )
  }
}

// 2. Function Component

ReactDOM.render(
  <React.StrictMode>
    <ContohClassComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();