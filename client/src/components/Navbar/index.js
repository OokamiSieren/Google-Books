import React from "react";
// import "./style.css";
function Navbar(props) {
  return (
    <nav class="navbar navbar-dark bg-dark" id="nav">
      <span class="navbar-brand mb-0 h1">Google Books</span>
      <a href="#">Search</a>
      <a href="#">Saved</a>
    </nav>
  );
}

export default Navbar;
