import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://www.skilllearningacademy.com/static/media/slaWhiteLogo.39e1a7a9eb37fd699d70.png" alt="logo"  className="logo-img"/>
      </div>
    
      <ul className="nav-links">
        <li className="navitem">Why SLA?
        </li>
        <li className="navitem"> Training</li>
        <li className="navitem">Blogs</li>
        <li className="navitem">Events</li>


        {/* droop list */}
        <li className="navitem dropdown">
          <button 
            className="dropdown-btn"
            onClick={() => setDropdown1(!dropdown1)}
          >
            Programs
          </button>
          {dropdown1 && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">1</li>
              <li className="dropdown-item"> 2</li>
            </ul>
          )}
        </li>
        
        {/* drooplist 2 */}
        <li className="nav-item dropdown">
          <button 
            className="dropdown-btn"
            onClick={() => setDropdown2(!dropdown2)}
          >
            Courses 
          </button>
          {dropdown2 && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Courses3</li>
              <li className="dropdown-item">Courses2</li>
              <li className="dropdown-item">Courses1</li>
              <li className="dropdown-item">Courses3</li>
              <li className="dropdown-item">Courses2</li>
              <li className="dropdown-item">Courses1</li>
            </ul>
          )}
        </li>
        <button style={{marginLeft:"30px", color:"white",backgroundColor:"#7F01EA",borderRadius:"7px",}} >Contact Us</button>
      </ul>
    </nav>
  );
};

export default Navbar;
