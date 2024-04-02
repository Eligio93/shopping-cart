import cartIcon from "../assets/img/cart-icon.svg";
import hamburgerIcon from "../assets/img/hamburger-icon.svg"
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cart from "./Cart";

function Header({ cart, categories, removeFromCart, changeQuantity }) {
  const [cartSideBar, setCartSideBar] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  let location = useLocation();
  //if we change page the menu on mobile or the cart sidebar close
  useEffect(() => {
    setCartSideBar(false);
    setHamburgerMenu(false);
  }, [location]);

  //display the cart sidebar where the cart will be displayed
  function handleCartSideBar() {
    setCartSideBar(!cartSideBar);
  }

  //display the menu on mobile
  function handleHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <div className="header">
      <button onClick={handleHamburgerMenu} className="ham-menu">
        <img className="hamburger-icon" src={hamburgerIcon} alt="" />
      </button>

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
      <div className="cart-bar">
        <button
          onClick={() => {
            handleCartSideBar();
          }}
        >
          <img className="cartIcon" src={cartIcon} alt="" />
          {cart.length > 0 && <p className="cart-quantity">{cart.length}</p>}
        </button>
      </div>
      {cartSideBar && (
        <div className="cart-sidebar">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        </div>
      )}

      {/*if we are on mobile and so the hambuerger menu is true*/}
      {hamburgerMenu && (
        <div className="menu">
          <ul className="navigation-mobile">
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

        </div>
      )}
    </div>
  );
}
export default Header;
