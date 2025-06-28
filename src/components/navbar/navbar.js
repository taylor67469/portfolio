import  '../navbar/navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to ='/'><a className="navbar">Zachary Taylor's Portfolio</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navbar" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/taylor67469">Github</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/zachary-t-22487a119/">LinkedIn</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;