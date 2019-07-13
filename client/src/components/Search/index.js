import React from "react";
// import "./style.css";


// This file exports the Input, TextArea, and FormBtn components

 function Search (props) {
  return (
          <div className="container">
          <h3>Book Search:</h3>
<form class="create-form">
  <div class="form-group">
    <label for="ca">Book Ttitle: </label>
    <br></br>
    <input type="text"></input>
    <button type="submit">Search</button>
  </div>
  </form>
  </div>
  );
}
export default Search;
