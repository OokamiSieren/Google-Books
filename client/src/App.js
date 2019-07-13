import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
class App extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <Search></Search>
      </div>
    )};
};

export default App;
