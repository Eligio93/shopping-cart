import {NavLink} from "react-router-dom"


function Header({cart}) {
  return (
    
    <div className="header">
      <h1>Ec Fake Store</h1>
 
    <ul className="navigation">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="products">Products</NavLink></li>
    <li><NavLink to="about">About Us</NavLink></li>

    </ul>
    <div className="social-bar">
        <button onClick={()=>console.log(cart)}>Cart</button>
    </div>
    </div>
   
    
    
  );
}
export default Header;
