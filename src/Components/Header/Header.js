import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="container-fluid bg-dark text-light fixed-top">
          
               <strong>
<nav className="navbar navbar-expand-lg navbar-dark text-light-all">
 
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img alt="" src=""/>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-header-ul">
        <li className="nav-item">
          <NavLink className="nav-link "  activeClassName="active-link" to="/home" > Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active-link" to="/products" >All products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active-link" to ="/about" >About Us</NavLink>
        </li>
      </ul>
      <div className="header-login-signup">
          <div className="cart-icon d-flex  justify-content-center align-items-center">
     <div className="btn btn-red icon-sizex  bg-for-shadow rounded rounded-3"> <i className="fas fa-shopping-cart"><span className="p-3"> 0 </span></i> </div>
      
     <div>
     <button className=" btn btn-primary  text-nowrap m-2 bg-for-shadow " >Sign up</button>
      <button className=" btn btn-warning  text-nowrap m-2 bg-for-shadow " >Login</button>
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