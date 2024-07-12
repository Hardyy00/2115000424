const express = require("express");

const app = express();

const cors = require("cors");

function hashCode(string) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    hash = (hash << 5) - hash + code;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

app.use(
  cors({
    origin: "*",
  })
);

app.get("/categories/:categoryname/products", async (req, resp) => {
  const { n, page, price, rating, discount } = req.query;
  const { categoryname: name } = req.body;

  const last = 10 * page,
    first = last - 10;

  let res = await fetch(
    `http://20.244.56.144/test/companies/AMZ/categories/${name}/products?top=10`
  );

  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzc0Njg1LCJpYXQiOjE3MjA3NzQzODUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRlZThkOTU2LWQ3NzYtNGY0Yi05YTdlLTc5MDIyOTE0OGYwZCIsInN1YiI6ImhhcmRpay5nYXVyX2NzMjFAZ2xhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiR0xBIFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6IjRlZThkOTU2LWQ3NzYtNGY0Yi05YTdlLTc5MDIyOTE0OGYwZCIsImNsaWVudFNlY3JldCI6IkZQQWpwVkdycG1qdXpJckUiLCJvd25lck5hbWUiOiJIYXJkaWsgR2F1ciIsIm93bmVyRW1haWwiOiJoYXJkaWsuZ2F1cl9jczIxQGdsYS5hYy5pbiIsInJvbGxObyI6IjIxMTUwMDA0MjQifQ.nvI1uEdAotDi_gL0bTXftoGenwDsdsxvvOdQhZM_MWM",
  };

  const d1 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/FLP/categories/${name}/products?top=10`,
    { headers }
  );

  const d2 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/SNP/categories/${name}/products?top=10`,
    { headers }
  );

  const d3 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/MYN/categories/${name}/products?top=10`,
    { headers }
  );

  const d4 = await res.json();

  res = await fetch(
    `http://20.244.56.144/test/companies/AZO/categories/${name}/products?top=10`,
    { headers }
  );

  const d5 = await res.json();

  let data = [];

  for (const obj of d1) {
    data.push({ ...obj, id: hashCode(JSON.stringify(obj)) });
  }

  for (const obj of d2) {
    data.push({ ...obj, id: hashCode(JSON.stringify(obj)) });
  }

  for (const obj of d3) {
    data.push({ ...obj, id: hashCode(JSON.stringify(obj)) });
  }

  for (const obj of d4) {
    data.push({ ...obj, id: hashCode(JSON.stringify(obj)) });
  }

  for (const obj of d5) {
    data.push({ ...obj, id: hashCode(JSON.stringify(obj)) });
  }

  if (price || discount || rating) {
    data = data.sort((a, b) => {
      let prop = "";

      if (price) {
        prop = "price";
      } else if (discount) {
        prop = "discount";
      } else {
        prop = "rating";
      }
    });
  }
});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Running");
  }
});
