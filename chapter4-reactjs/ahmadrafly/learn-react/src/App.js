import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Github</p>
        <a
          className="App-link"
          href="https://github.com/AhmadRafly23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ahmad Rafly Pradana
        </a>
      </header>
    </div>
  );
}

export default App;
