
import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./Report/MovieList";

import "./index.css";

function App() {
    return (
        <div className="App">
              <MovieList />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
