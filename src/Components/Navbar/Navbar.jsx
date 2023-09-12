import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  //change nav padding on scroll
  const [padding, setPadding] = useState(true);
  const changePadding = () => {
    if (window.scrollY >= 34) {
      setPadding(false);
    } else {
      setPadding(true);
    }

  }

  window.addEventListener("scroll", changePadding);
 
  return (
    <nav className={padding ? "navbar nav-padding position-fixed fixed-top navbar-expand-lg bg-body-tertiary" : "navbar position-fixed fixed-top navbar-expand-lg bg-body-tertiary"}>
    <div className="container">
      <Link to={"home"} className="navbar-brand text-uppercase fw-bolder fs-2">START FRAMEWORK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={"about"} className="nav-link me-3 p-2 fw-bold">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"portfolio"} className="nav-link me-3 p-2 fw-bold" >Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"contact"} className="nav-link p-2 fw-bold">Contact</NavLink>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}
