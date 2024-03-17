import Header from "./components/Header";
import {useLocation, Outlet,Link} from "react-router-dom";
import "./index.css";

function App() {
  //Check if the page we are at is the home
  const isActive=useLocation().pathname==="/";
  //https://fakeapi.platzi.com/

  return (
    <>
      <Header />
      {isActive?
      <>
      <div className="home">
      <p>Welcome to</p>
      <h1>EC Fake Store</h1>
      <p>Elevate your tech game with our cutting-edge electronics emporium. From smartphones to laptops,
         find all you need for a tech-savvy lifestyle. Shop now for unbeatable deals and top-notch service!</p>
      <Link to="products"><button>Shop Now</button></Link>
      </div>
      
      
      </>
      
      
      
      
      : <Outlet />}
    </>
  );
}

export default App;
