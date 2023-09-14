import React from "react";


function  Qualification(){

return(
<div className="container-fluid m-2" id="qualification">
  <div className="container">
      <div className=" d-flex align-items-center justify-content-center">
          <h1 className="text-uppercase text-primary">Education & Expericence</h1>
      </div>
      <div className="row m-5">
        <h3 className="mb-4 text-primary">My Education</h3>
            <div className="mb-4 col-lg-6 col-12 col-md-6">
                      <h5 className="font-weight-bold">Bachelor of Engineering in Computer Science</h5>
                      <p className="mb-2"><strong>Anna  University</strong>  <small>2015 - 2019</small></p>
                  </div>
                  <div className= "mb-4 col-12 col-lg-6 col-md-6">
                    <h5 className="font-weight-bold mb-1">Full Stack Development</h5>
                      <p className="mb-2"><strong>KGISL Micro College</strong>  <small> At present</small></p>
                  </div>
                  </div>
               </div>
      </div>
);}
export default Qualification;