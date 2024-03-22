import cartIcon from "../assets/img/cart-icon.svg";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cart from "./Cart";

function Header({ cart, categories, removeFromCart, changeQuantity}) {
  const [cartSideBar, setCartSideBar] = useState(false);
  let location = useLocation();
  useEffect(() => {
    setCartSideBar(false);
  }, [location]);
  function handleCartSideBar() {
    setCartSideBar(!cartSideBar);
  }

  return (
    <div className="header">
      <h1>Ec Fake Store</h1>

      <ul className="navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li className="dropdown">
          <div className="categoriesBtn">Categories</div>
          <div className="dropdown-links">
            {categories &&
              categories.map((category) => (
                <NavLink key={category} to={"categories/" + category}>
                  {category}
                </NavLink>
              ))}
          </div>
        </li>
        <li>
          <NavLink to="about">About Us</NavLink>
        </li>
      </ul>
      <div className="social-bar">
        {/*al click del button si aprira il div laterale*/}
        <button
          onClick={() => {
            handleCartSideBar();
            console.log(cart);
          }}
        >
          <img className="cartIcon" src={cartIcon} alt="" />
          {cart.length > 0 && <p className="cart-quantity">{cart.length}</p>}
        </button>
      </div>
      {cartSideBar && (
        <div className="cart-sidebar">
          {cart.length == 0 ? (
            <p>Aggiungi elementi</p>
          ) : (
            <Cart cart={cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity}/>
          )}
        </div>
      )}
    </div>
  );
}
export default Header;
