import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="w-full h-full">
      <header>
        <h1 className="font-bold text-xl">Products</h1>
      </header>

      <section>
        <div></div>
      </section>
    </main>
  );
}

export default App;
