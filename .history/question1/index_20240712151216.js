const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/categories/:categoryname/products", async (req, res) => {
  const { n, page } = req.query;
  const { categoryname: name } = req.body;

  const last = 10 * page,
    first = last - 10;

  let res = await fetch(
    `http://20.244.56.144/test/companies/AMZ/categories/${name}/products?top=10`
  );

  const headers = { Authorization: "Bearer " };

  const d1 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/FLP/categories/${name}/products?top=10`
  );

  const d2 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/SNP/categories/${name}/products?top=10`
  );

  const d3 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/MYN/categories/${name}/products?top=10`
  );

  const d4 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/AZO/categories/${name}/products?top=10`
  );

  const d5 = await res.json();
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Running");
  }
});
