import React from "react";
import { Link } from "react-router-dom";

function Menu(){
  return(
<>
            <nav className="navbar navbar-expand-lg bg-secondary text-light">
          <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">ReactJS</a>
          <button className="navbar-toggler bg-light bg-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
            <li className="nav-item ">
             <Link to={'/Hello'} class="nav-link active text-light " href="#">Hello</Link>
              </li>
              <li className="nav-item ">
              <Link to={'/Congratscard'} class="nav-link text-light " href="#">Congratscard</Link>
              </li>
      
              <li className="nav-item">
              <Link to={'/Superover'} class="nav-link text-light" href="#">Superover</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Social'} class="nav-link text-light" href="#">Social</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Notification'} class="nav-link text-light" href="#">Notification</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Login'} class="nav-link text-light" href="#">Login</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Technology'} class="nav-link text-light" href="#">Technology</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Hooks'} class="nav-link text-light" href="#">Hooks</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Fruits'} class="nav-link text-light" href="#">Fruits counter</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Display'} class="nav-link text-light" href="#">Json</Link>
              </li>
              <li className="nav-item">
              <Link to={'/Feedback'} class="nav-link text-light" href="#">Feedback</Link>
              </li>
              

              
            </ul>
          </div>
        </div>
      </nav>
</>
         );
}
export default Menu;