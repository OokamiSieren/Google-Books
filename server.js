const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://googleBooks:books1@ds353007.mlab.com:53007/heroku_4mh5fzd7",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

//  API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
