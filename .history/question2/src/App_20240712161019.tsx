import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="w-full h-full">
      <header>
        <h1>Products</h1>
      </header>
    </main>
  );
}

export default App;