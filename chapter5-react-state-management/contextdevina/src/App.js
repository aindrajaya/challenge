import React, { createContext, useState } from 'react';
import CounterApp from './Counter';
import './theme.css'
import ReactSwitch from 'react-switch'

// import Form from './Form';
// import CounterContextAPI from './Counter/CounterContextAPI';

export const ThemeContext = createContext(null)
function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}> 
      <h2> Devina Gunawan </h2>
       <CounterApp />
       {/* <Form/> */}
       <div className='switch'>
        <label>{theme === "light" ? "light mode" : "dark mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked ={theme === 'dark'}/>
       </div>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
