import {NavLink} from "react-router-dom"


function Header() {
  return (
    
    <div className="header">
 
    <ul className="navigation">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="products" >Products</NavLink></li>
    <li><NavLink to="about">About Us</NavLink></li>

    </ul>
    <div className="social-bar">
        <p>ciao
            
        </p>
    </div>
    </div>
   
    
    
  );
}
export default Header;
