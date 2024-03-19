import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

function Products({addToCart}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
    console.log(data);
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="products">
          {data.map((product) => (
            <div className="product-card" key={product.id}>
              <ItemCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Products;
