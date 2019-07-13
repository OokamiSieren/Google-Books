import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
class App extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      </div>
    )};
};

export default App;
