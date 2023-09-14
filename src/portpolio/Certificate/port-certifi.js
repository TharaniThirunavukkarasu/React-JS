import React from "react";
import './certificate.css'
import certificat from './download21.jpg'

function Certificate(){
return(
<div className="container-fluid" id="certificate">
        <div  className="container">
      <h1  className="text-uppercase text-primary">Certificates</h1>
      <div id="carouselExampleIndicators"  className="carousel slide">
          <div  className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div  className="carousel-inner ">
            <div  className="carousel-item active certificate-details">
              <img src={certificat}  className="d-block w-90 col-lg-6"/>
            </div>
            <div  className="carousel-item certificate-details">
              <img  src={certificat} className="d-block w-90 col-lg-6"/>
            </div>
            <div  className="carousel-item certificate-details">
              <img   src={certificat}  className="d-block w-90 col-lg-6"/>
            </div>
          </div>
          <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span  className="visually-hidden">Previous</span>
          </button>
          <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span  className="carousel-control-next-icon" aria-hidden="true"></span>
            <span  className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
);
}
export default Certificate;