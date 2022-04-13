import { createContext, useState } from 'react';
import CounterApp from './Counter';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css';
import Form from './Form';

//Declare component context
export const ThemeContext = 'String';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={'data'}>
        <h2>Your Name</h2>
        <CounterApp />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
