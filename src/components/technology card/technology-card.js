import React from "react";
import './tech.css'
import iot from './iotdeveloper.jpg'
import mlengineer from './mlengineer1.jpg'
import scientist from './scientist.png'
import vrdeveloper from './vrdeveloper.jpg'
function Technology(){
return(
<div className="container mx-auto text-center p-5">
<h1 className="text-center ">Learn 4.0 Technologies</h1>
<p className="text-center"> I recommend focusing on 13 skills at a time. And if you choose to work on several skills at the same time, you might want to pick one of the skills as your main priority.</p>
<div className="row row-cols-1 row-cols-md-2 g-18  p-0 m-auto ">
  <div  className="col-md-6 p-2">
    <div  className="card bg-light  tech-card1 col-md-6">
      <div  className="card-body">
        <h5  className="card-title">Scientist</h5>
        <p  className="card-text">A scientist is someone who systematically gathers and uses research and evidence, to make hypotheses and test them, to gain and share understanding and knowledge </p>
      </div>
      <img src={scientist }  className="card-img-top img1"/>
    </div>
  </div>
  <div  className="col-md-6 p-2">
    <div  className="card bg-light tech-card2 col-md-6">
     
      <div  className="card-body">
        <h5  className="card-title">IOT Developer</h5>
        <p  className="card-text">A scientist is someone who systematically gathers and uses research and evidence, to make hypotheses and test them, to gain and share understanding and knowledge</p>
      </div>
      <img src={iot} className="card-img-left img1"/>
    </div>
  </div>
  <div  className="col-md-6 p-2">
    <div  className="card bg-light tech-card3 col-md-6">
      
      <div  className="card-body">
        <h5  className="card-title">VR Developer</h5>
        <p  className="card-text"></p>
      </div>A scientist is someone who systematically gathers and uses research and evidence, to make hypotheses and test them, to gain and share understanding and knowledge
      <img src={ vrdeveloper}  className="card-img-top img1"/>
    </div>
  </div>
  <div  className="col-md-6 p-2">
    <div  className="card bg-light tech-card4 col-md-6">
    
      <div  className="card-body">
        <h5  className="card-title">MI Engineer</h5>
        <p  className="card-text">A scientist is someone who systematically gathers and uses research and evidence, to make hypotheses and test them, to gain and share understanding and knowledge</p>
      </div>
      <img src={ mlengineer}  className="card-img-top img1"/>
    </div>
  </div>
</div>






</div>



  
)


}
export default Technology;