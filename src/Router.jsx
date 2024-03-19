import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./Products";
import About from "./About";
import { useState } from "react";

const Router = () => {
  const[cart,setCart]=useState([])
  function addToCart(product,quantity){
    let totPrice=product.price * quantity
    setCart([...cart,{title:product.title, quantity:quantity, totPrice:totPrice, img:product.image }]);

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart}/>,
      children: [
       {
          path: "products",
          element: <Products addToCart={addToCart}/>,
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
