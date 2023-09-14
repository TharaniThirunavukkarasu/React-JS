import React from "react";
import './about.css'
import portimg2 from './images2.jpg'



function About(){
    return(
<div className="container-fluid py-5" id="about">
  <div  className="container">
      <div  className="position-relative d-flex align-items-center justify-content-center">
          <h1  className="text-uppercase text-white">About</h1>
          <h1  className="position-absolute text-uppercase text-primary">About Me</h1>
      </div>
      <div  className="row align-items-center">
          <div  className="col-lg-5 pb-4 pb-lg-0 col-12">
              <img src={portimg2} className="col-lg-9"/>
          </div>
          <div  className="col-lg-7 col-12">
              <h3  className="mb-4">UI/UX Designer & Web Developer</h3>
              <p>As a highly passionate and dedicated Front-End Developer based in Coimbatore, India, my objective is to utilize my expertise in Front-End and Graphic design tools to build premium and visually appealing websites. Additionally, my skills in Marketing, Retail, and Hospitality sectors can be leveraged to create innovative and effective digital solutions for businesses in these industries. Ultimately, I strive to create impactful and user-friendly websites that drive business growth and success.</p>
              <div  className="row mb-3">
                  <div  className="col-sm-6 "><h6>Name: <span  className="text-secondary">Tharani</span></h6></div>
                  <div  className="col-sm-6 "><h6>Birthday: <span  className="text-secondary">16 march 1998</span></h6></div>
                  <div  className="col-sm-6 "><h6>Degree: <span  className="text-secondary">B.E</span></h6></div>
                  <div  className="col-sm-6 "><h6>Experience: <span  className="text-secondary">Fresher</span></h6></div>
                  <div  className="col-sm-6 "><h6>Phone: <span  className="text-secondary">9566792793</span></h6></div>
                  <div  className="col-sm-6 "><h6>Email: <span  className="text-secondary">tharathiruo3q6@gmail.com</span></h6></div>
                  <div  className="col-sm-6"><h6>Address: <span  className="text-secondary">123 Street,melur,Madurai</span></h6></div>
                  
              </div>
              <a href=""  className="btn  btn-outline-primary mr-4 m-3 blue ">Hire Me</a>
              <a href=""  className="btn btn-outline-primary m-3 blue">Learn More</a>
          </div>
      </div>
  </div>
</div>





    );
}
export default About;