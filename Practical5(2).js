D.
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {axios.get("https://dummyjson.com/products")
    .then((response) => {
      setProducts(response.data.products);
    }); }, []);
    return (
      <div>
        <h1>Product List</h1>
        <h4>Soham Acharekar T001</h4>
        <hr/>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: Rs.{product.price}</p>
            </div>
        ))}
      </div>
    );
  }
export default App;

E.
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <h4>Soham Acharekar T001</h4>
      <hr />

      <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price (Rs.)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;

F.
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Product List</h1>
      <h4>Soham Acharekar T001</h4>
      <hr />
      {/* Search box */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <table border="1" cellPadding="10" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>₹{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
