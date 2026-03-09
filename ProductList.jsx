import React, { useState } from "react";
import "./App.css";

function ProductList() {

  // Product list state
  const [products] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" }
  ]);

  // State for grid/list layout (Task 3)
  const [layout, setLayout] = useState("grid");

  // State for filter input (Task 4)
  const [filter, setFilter] = useState("");

  // State for hover highlight (Task 5)
  const [hovered, setHovered] = useState(null);

  // Task 4: Filter products based on product name
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>

      {/* Task 4: Input field to filter products */}
      <input
        type="text"
        placeholder="Search product..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* Task 3: Button to toggle between grid and list layout */}
      <button onClick={() => setLayout(layout === "grid" ? "list" : "grid")}>
        Toggle Layout
      </button>

      {/* Task 2: Conditional rendering when no products available */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (

        <div className={layout === "grid" ? "grid" : "list"}>

          {/* Task 1: Render products using .map() with stable key */}
          {filteredProducts.map((product) => (
            <div
              key={product.id}

              // Task 5: Highlight item when hovered using conditional class
              className={hovered === product.id ? "item hover" : "item"}

              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {product.name}
            </div>
          ))}

        </div>

      )}

    </div>
  );
}

export default ProductList;