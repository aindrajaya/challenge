import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kevin Octaviano
        </p>
        <a
          className="App-link"
          href="https://github.com/kevinoctaviano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see my Github Page.
        </a>
      </header>
    </div>
  );
}

export default App;
