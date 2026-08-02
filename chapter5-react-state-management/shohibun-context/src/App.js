import { createContext, useState } from 'react';
import CounterApp from './Counter';
// import Form from './Form';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css'

//Declare component context
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <h2 className='sign'>Shohibun Najam Ilma</h2>
        {/* <Form /> */}
        <CounterApp />
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
