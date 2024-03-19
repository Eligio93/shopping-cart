import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

function Products({addToCart}) {
  const [products, setProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setProducts(result);
        console.log(products)
      } catch (error) {
        setError(error);
        setProducts(null);
      } finally {
        setLoadingProducts(false);
      }
    };

    getProducts();   
  }, []);

  
  return (
    <>
      {loadingProducts ? (
        <h1>Loading..</h1>
      ) : (
        <div className="products">
          {products.map((product) => (
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
