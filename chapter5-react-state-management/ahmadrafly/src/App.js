import { createContext, useState } from "react";
import CounterApp from "./Counter";
import ReactSwitch from "react-switch";

//Style
import "./Theme.css";
import Form from "./Form";
import CounterRedux from "./Counter/CounterRedux";
import { Provider } from "react-redux";
import store from "./Counter/CounterRedux/store";

//Declare component context
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <div className="App" id={theme}>
    //     <h2>Your Name</h2>
    //     <CounterRedux />
    //     <div className="switch">
    //       <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
    //       <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
    //     </div>
    //   </div>
    // </ThemeContext.Provider>
    <Provider store={store}>
      <CounterRedux max={5} min={0} step={1} />
    </Provider>
  );
}

export default App;
