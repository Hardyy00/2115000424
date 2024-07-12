import { useEffect, useState } from "react";
import "./App.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");

  const [data, setData] = useState<[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:8080/categories/Laptop/products?page=${currentPage}&${filter}=true`
      );
    };

    getData();
  }, [currentPage, filter]);

  return (
    <main className="w-full h-full space-y-4">
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
              onChange={(e) => setFilter(e.target.value)}
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
