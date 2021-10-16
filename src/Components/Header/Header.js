import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="container-fluid ">
          
               <strong>
<nav className="navbar navbar-expand-lg navbar-light">
 
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img alt="" src="./image-icons/icon/burger.png"/>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-header-ul">
        <li className="nav-item">
          <NavLink className="nav-link " to="/home" > Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/link" >Link</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" to ="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
      <div className="header-login-signup">
          <div className="cart-icon d-flex  justify-content-center align-items-center">
     <div className="icon-size me-3"> <i class="fas fa-shopping-cart"></i> </div>
      
     <div>
     <button className=" btn btn-primary  text-nowrap m-2" type="submit">Sign up</button>
      <button className="btn btn-danger btn-rounded rounded-3 text-nowrap m-2" type="submit">Login</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</strong>
        </div>
    );
};

export default Header;