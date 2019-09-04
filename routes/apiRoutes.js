const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  let httpQuery = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyDisMGT9opE-AQSDGZtL5pHRw1LNWAsxlI " + req.query.q;
  console.log("Query: %s", httpQuery);
  axios.get(httpQuery)
    .then(function(response){
      console.log("router.get/books");
      res.json(response.data);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;