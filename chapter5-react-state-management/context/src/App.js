import { createContext, useState } from 'react';
// import CounterApp from './Counter';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css'
import Form from './Form';

//Declare component context
<<<<<<< HEAD
export const ThemeContext = createContext();
=======
export const ThemeContext = createContext(null);
>>>>>>> 85be699c8a1b6463de53417fb1fdd0c8c6c2d06d

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
<<<<<<< HEAD
        <h2>Rio Al Rasyid</h2>
        <Form />
=======
        <h2>Your Name</h2>
        <CounterApp />
>>>>>>> 85be699c8a1b6463de53417fb1fdd0c8c6c2d06d
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
