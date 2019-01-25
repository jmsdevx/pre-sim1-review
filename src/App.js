import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
