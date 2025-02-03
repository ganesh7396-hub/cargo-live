import { useState } from "react";
import { Link } from "react-router-dom";
import "../common.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="nav-bar">
    <div className="container">
      <Link to="/" className="logo">CARGO-LIVE</Link>

    <ul className="nav-links">

      <li><Link to ="/" className="nav-item">HOME</Link> </li>
      <li> <Link to ="/about" className="nav-item">ABOUT</Link> </li>
      <li>  <Link to ="/service" className="nav-item">SERVICES</Link> </li>
      <li> <Link to ="/contact" className="nav-item">CONTACT</Link> </li>
      <li> <Link to="/login" className="nav-item">  <i className="fa fa-user-circle"></i> LOGIN </Link></li>

      </ul>
    </div>

  </nav>
  );
};
export default NavBar;