import Header from "./components/Header";
import { useLocation, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function App({ cart, removeFromCart }) {
  //Check if the page we are at is the home
  const isActive = useLocation().pathname === "/";
  //https://fakeapi.platzi.com/
  const [categories, setCategories] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async function () {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setCategories(result);
      } catch (error) {
        setError(error);
        console.log("Errore nel fetching data");
        setCategories(null);
      } finally {
        setLoadingCategories(false);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      <Header
        cart={cart}
        categories={categories}
        removeFromCart={removeFromCart}
      />
      {isActive ? (
        <>
          <div className="home">
            <p>Welcome to</p>
            <h1>EC Fake Store</h1>
            <p>
              Elevate your tech game with our cutting-edge electronics emporium.
              From smartphones to laptops, find all you need for a tech-savvy
              lifestyle. Shop now for unbeatable deals and top-notch service!
            </p>
            <Link to="products">
              <button>Shop Now</button>
            </Link>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
