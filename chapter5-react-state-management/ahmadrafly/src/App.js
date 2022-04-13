import { createContext, useState } from "react";
// import CounterApp from "./Counter";
import ReactSwitch from "react-switch";

//Style
import "./Theme.css";
import Form from "./Form";

//Declare component context
const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
          <p className="nama">Ahmad Rafly Pradana</p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
