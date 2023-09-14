import React from "react";
import './feedback.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSadTear  } from "@fortawesome/free-solid-svg-icons";
import {faMeh } from "@fortawesome/free-solid-svg-icons";
import {faLaugh} from "@fortawesome/free-solid-svg-icons";

function Feedback(){
return(
<>
<div className="feedmain container-fluid ">
<div className="feedbackback bg-light">
<h3 className="text-center p-2 col-12" style={{fontWeight: "bolder",}}>How  satisfied are you with our customer support performance?</h3>
    <div className="row text-center p-2 col-12 ">
   
        <div className="col-lg-4 col-md-4"> <FontAwesomeIcon icon={faSadTear} style={{color: "#dca204",}} className="feedsmile col-lg-12 col-4 col-md-8 "/>
        <h6 className="p-3">Sad</h6>
        </div>
        <div  className="col-lg-4 col-md-4"><FontAwesomeIcon icon={faMeh} style={{color: "#dca204",}} className="feedsmile col-lg-12 col-4 col-md-8"/>
        <h6 className="p-3">None</h6>
        </div>
        <div  className="col-lg-4 col-md-4"><FontAwesomeIcon icon={faLaugh} style={{color: "#dca204",}} className="feedsmile col-lg-12 col-4 col-md-8 "/>
        <h6 className="p-3">Happy</h6>
        </div>
   
    
    
 </div>
</div>





</div>




</>
)
}
export default Feedback;