import { createContext, useState } from 'react';
import CounterApp from './Counter';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css';
import Form from './Form/index.jsx';

//Declare component context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <h2 className="myname">Jhon Michael Manik</h2>
        <Form />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
