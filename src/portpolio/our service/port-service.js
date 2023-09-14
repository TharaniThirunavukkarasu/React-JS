import React from "react";
import './service.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faComputer} from "@fortawesome/free-solid-svg-icons";
function Service(){
return(

<div className="container-fluid " id="service">
        <div className="container">
          <h1>Our services</h1>
          <div className="row">
          <div className="card ser-design" >
          {/* <FontAwesomeIcon icon={faComputer} className="w-100" /> */}
            <div className="card-body"> 
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card ser-design" >
            <i className="fa-sharp fa-regular fa-globe icon2"></i>
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card ser-design">
           {/* <FontAwesomeIcon icon={fa-sharp} className="sizing"/>  */}
            <i className="fa-sharp fa-regular fa-pen-to-square icon2"></i>
            <div className="card-body">
              <h5 className="card-title">content creating</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          </div>
          </div>
          </div>

);



}
export default Service;