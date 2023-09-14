import React from "react";
import './home.css'
import profilephoto from './images (1).jpg'

function Home(){
return(
  <div className="container-fluid bg-primary d-flex align-items-center  col p-1 " id="home" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7  col-md-6  col-12 text-center">
                    <h1 className="text-white mb-3 text-hello mt-1">Hello, my name</h1>
                    <h2 className="text-name">THARANI</h2>
              <div className="typed-text"><h6>Full Stack Developer</h6></div>
            </div>
            <div className="col-12 col-md-12 col-lg-4"> 
              <img src={profilephoto} className="col-lg-12"/>
            </div>
          </div>
         </div>  
      </div>
 
);
}
export default Home;