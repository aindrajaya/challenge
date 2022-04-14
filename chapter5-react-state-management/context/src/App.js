import { createContext, useState } from 'react';
import CounterApp from './Counter';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css';
import Form from './Form/index.jsx';

//Declare component context
<<<<<<< HEAD
export const ThemeContext = createContext();
=======
export const ThemeContext = createContext(null);
>>>>>>> 42dc2f47c17b21980693fb94e509d6717a93904f

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
<<<<<<< HEAD
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <h2 className="myname">Jhon Michael Manik</h2>
        <Form />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
=======
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <h2>Your Name</h2>
        <CounterApp />
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
>>>>>>> 42dc2f47c17b21980693fb94e509d6717a93904f
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
