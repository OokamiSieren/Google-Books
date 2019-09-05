import React from "react";
// import "./style.css";


// This file exports the Input, TextArea, and FormBtn components

 function Search ({ q, handleInputChange, handleFormSubmit}) {
  return (
          <div className="container">
          <h3>Book Search:</h3>
<form className="create-form">
  <div className="form-group">
    <label>Book Ttitle: </label>
    <br></br>
    <input className="form-control"
          id="Title"type="text"value={q}name="q"
          onChange={handleInputChange}
          required></input>
    <button onClick={handleFormSubmit}type="submit">Search</button>
  </div>
  </form>
  </div>
  );
}
export default Search;
