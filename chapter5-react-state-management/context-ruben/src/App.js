import { createContext, useState } from 'react';
import CounterApp from './Counter';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css';
import Form from './Form';

//Declare component context
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  if(theme === "dark"){
    document.body.classList.add("dark-theme");
  } else{
    document.body.classList.remove("dark-theme")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <h2>Ruben Emanuel Widagdo</h2>
        {/* <CounterApp /> */}
        <Form />
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;