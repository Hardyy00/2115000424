import { useEffect, useState } from "react";
import "./App.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { createBrowserRouter, Link } from "react-router-dom";
import ProductItem from "./components/ProductItem";

interface Item {
  id: string | number;
  productName: string;
  price: number | string;
  rating: number | string;
  discount: number | string;
}

export const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:id", element: <ProductItem /> },
]);

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");

  const [data, setData] = useState<[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      setData(null);
      const res = await fetch(
        `http://localhost:8080/categories/Laptop/products?page=${currentPage}&${filter}=true`
      );

      const data = await res.json();
      setData(data);
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

      <section>
        {data ? (
          data.map((item: Item, idx) => (
            <Link to={`/${item.id}`}>
              <div key={idx} className="flex flex-col">
                <div className="w-[50%] relative">
                  <img
                    src={"https://api.api-ninjas.com/v1/randomimage"}
                    className="w-full h-full"
                  />
                </div>

                <div>
                  <h2>{item.productName}</h2>
                  <h2>{item.price}</h2>
                  <h2>{item.rating}</h2>
                  <h2>{item.discount}</h2>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <section>
        <div className="flex items-center gap-x-4">
          <button onClick={() => setCurrentPage((pre) => pre - 1)}>
            Previous
          </button>
          <button onClick={() => setCurrentPage((pre) => pre + 1)}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
