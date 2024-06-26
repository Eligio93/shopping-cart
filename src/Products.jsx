import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import { useParams } from "react-router-dom";
import loadingAnimation from "../src/assets/img/loadingAnimation.svg"

function Products({ addToCart }) {
  const [products, setProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  /*retrive products from FAke Store*/
  useEffect(() => {
    const getProducts = async () => {
      let response;
      try {
        /*if category is not specified in the url get all products*/
        if (category == undefined) {
          response = await fetch(`https://fakestoreapi.com/products`);
        } else {
          /*else get products of the category selected*/
          response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
          );
        }
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
        setError(error);
        setProducts(null);
      } finally {
        setLoadingProducts(false);
      }
    };

    getProducts();
    /*when the category changes, display products of the new category*/
  }, [category]);

  return (
    <>
      {loadingProducts ? (
        <div className="loader">
          <img src={loadingAnimation} alt="loading-animation" />
        </div>

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
