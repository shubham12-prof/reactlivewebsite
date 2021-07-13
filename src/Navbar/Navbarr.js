import React from 'react';
import './Navbarr.css'; 
import { NavLink } from "react-router-dom";


const Navbarr = () => 
{
       return (
<>
<div className="container-fluid nav-bg">
<div className="row">
<div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light bg-light " >
  <NavLink 
  className="navbar-brand" to="/">Mountains</NavLink>
  <button className="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName= 'menu_active' 
        exact className="nav-link" to="/">
        Home                 
          <span className="sr-only">(current)</span>
         </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName= 'menu_active' className="nav-link" to="/Quotes">Quotes</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName= 'menu_active' className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName= 'menu_active' className="nav-link" to="/contact">Contact</NavLink>
      </li>
      {/* <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="#">Action</NavLink>
          <NavLink className="dropdown-item" to="#">Another action</NavLink>
          <div className="dropdown-divider"></div>
          <NavLink className="dropdown-item" to="#">Something else here</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="#">Disabled</NavLink>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</div>
 </div>

</div>
   </>
    )
}

export default Navbarr;