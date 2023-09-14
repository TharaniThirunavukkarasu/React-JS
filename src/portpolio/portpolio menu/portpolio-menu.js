import React from "react";
import { Link } from "react-router-dom";

function Menus(){
  return(
<>
            <nav className="navbar navbar-expand-lg bg-secondary text-light">
          <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">my portpolio</a>
          <button className="navbar-toggler bg-light bg-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
            <li className="nav-item ">
             <Link to={'/Home'} class="nav-link active text-light " href="#">Home</Link>
              </li>
              <li className="nav-item ">
              <Link to={'/About'} class="nav-link text-light " href="#">About</Link>
              </li>
      
              <li className="nav-item">
              <Link to={'/Qualification'} class="nav-link text-light" href="#">Qualification</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Certificate'} class="nav-link text-light" href="#">Certificate</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Service'} class="nav-link text-light" href="#">Our services</Link>
              </li>
             
              

              
            </ul>
          </div>
        </div>
      </nav>
</>
         );
}
export default Menus;