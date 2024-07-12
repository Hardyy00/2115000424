const express = require("express");

const app = express();

const cors = require("cors");

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Running");
  }
});
