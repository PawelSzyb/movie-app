import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MovieList from "../src/components/MovieList";
import Navbar from "../src/components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={MovieList} />
        </div>
      </Router>
    );
  }
}

export default App;
