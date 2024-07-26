import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    {
      title: "",
      description: "",
      images: [],
    },
  ]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data.products);
      })
      .catch((e) => {
        console.log("something went wrong", e);
      });
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}>
      <table>
        <thead>
          <th className="table_border">Product name</th>
          <th className="table_border">Description</th>
          <th className="table_border">Image</th>
        </thead>
        <tbody>
          {list?.map((item) => {
            return (
              <tr key={item?.title}>
                <td className="table_border">{item?.title}</td>
                <td className="table_border">{item?.description}</td>
                <td className="table_border">
                  <img width={300} src={item?.images[0]} alt="product image" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
