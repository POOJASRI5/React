import React, { useState } from "react";

function Task4() {

  const products = ["Laptop", "Mobile", "Keyboard", "Mouse"];

  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);

  const filtered = products.filter((p) =>
    p.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Filter input */}
      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Toggle layout */}
      <button onClick={() => setGrid(!grid)}>Toggle Layout</button>

      {/* Show message if empty */}
      {filtered.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: grid ? "grid" : "block" }}>
          
          {/* Render products */}
          {filtered.map((item, index) => (
            <p
              key={index}
              onMouseEnter={(e) => (e.target.style.background = "lightgray")}
              onMouseLeave={(e) => (e.target.style.background = "white")}
            >
              {item}
            </p>
          ))}

        </div>
      )}

    </div>
  );
}

export default Task4;