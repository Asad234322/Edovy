import React , { useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
// import 'font-awesome/css/font-awesome.min.css';
import './Header.css'
import logo from './../../images/logo.svg'
import Gift from './../../images/referralGift.342a655b.gif'



function Header() {

  const [isResponsive, setResponsive] = useState(false);

  const toggleMenu = () => {
    console.log("Function calling");
    setResponsive(!isResponsive);
    // var navbar = document.getElementById("myNavbar");
    // navbar.classList.toggle("responsive");
  }


  return (
    <div className="header" >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="serachBar">
        <input type="text" placeholder="Search for courses, institutions..." />
        <FontAwesomeIcon icon={faSearch} className="searchIcon"  />
      </div>
      <FontAwesomeIcon icon={faBars} className="BarMenu" onclick="toggleMenu()"/>
      <div className="Menu" id="myNavbar" >
        <ul>
          <li>
            <a href="#">
              Courses <FontAwesomeIcon style={{ paddingRight: "4px" }} icon={faChevronDown} />
            </a>
          </li>
          <li>
            <a href="#">
              Institutions <FontAwesomeIcon style={{ paddingRight: "4px" }} icon={faChevronDown} />
            </a>
          </li>
          <li>
            <a href="#">
              About <FontAwesomeIcon style={{ paddingRight: "4px" }} icon={faChevronDown} />
            </a>
          </li>
        </ul>
      </div>

      <div className="Button-section">
        <img
          src={Gift}
          alt="Computer man"
          style={{ width: '35px' }}
        />
        <button className="logIn">Log In</button>
        <button className="Signup">Sign Up</button>
      </div>

    </div>
  )
}

export default Header