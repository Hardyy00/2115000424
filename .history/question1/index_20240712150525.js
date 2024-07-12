const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);


app.get('/categories/:categoryname/products',(req,res)=>{

    const {n, page} = req.query;

    const last = 10 * page, first = last - 10;

    const d1 = 
})

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Running");
  }
});
