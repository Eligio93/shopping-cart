import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./Products";
import About from "./About";
import { useEffect, useState } from "react";
import Categories from "./Categories";

const Router = () => {
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
        console.log("Errore nel fetching data")
        setCategories(null);
      } finally {
        setLoadingCategories(false);
      }
    };

    getCategories();
  }, []);
  const [cart, setCart] = useState([]);
  //add to cart function
  function addToCart(product, quantity) {
    let totPrice = product.price * quantity;
    //get the index to check if the element is already in cart
    let existingItemIndex = cart.findIndex(
      (item) => item.title == product.title
    );
    //if it's already in cart
    if (existingItemIndex !== -1) {
      //update array
      let updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      updatedCart[existingItemIndex].totPrice += totPrice;
      //set new Cart
      setCart(updatedCart);
    } else {
      //else add a new item in the cart
      setCart([
        ...cart,
        {
          title: product.title,
          quantity: quantity,
          totPrice: totPrice,
          img: product.image,
        },
      ]);
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart} categories={categories} />,
      children: [
        {
          path: "products",
          element: <Products addToCart={addToCart} />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "About",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
