import { useState } from "react";
import "./App.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

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
              value={age}
              label="Age"
              onChange={() => setFilter("")}
            >
              <MenuItem value={10}>Rating</MenuItem>
              <MenuItem value={20}>Discount</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
    </main>
  );
}

export default App;
