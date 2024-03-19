import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./Products";
import About from "./About";
import { useState } from "react";

const Router = () => {
  const[cart,setCart]=useState([])
  function addToCart(name){
    setCart([...cart,name]);

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
