import { useEffect, useState } from "react";
import "./App.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const [data, setData] = useState(null);
  

  useEffect(() => {
    const getData = async fetch(
      "http://localhost:8080/categories/Laptop/products?n=6&page=1"
    );
  });

  return (
    <main className="w-full h-full">
      <header>
        <h1 className="font-bold text-xl">Products</h1>
      </header>

      <section>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Age"
              onChange={() => setFilter("")}
            >
              <MenuItem value={""}>Select</MenuItem>
              <MenuItem value={"rating"}>Rating</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"discount"}>Discount</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
    </main>
  );
}

export default App;
