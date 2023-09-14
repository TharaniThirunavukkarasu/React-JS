import React from "react";
import './login.css'
import computer from './download.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
function Login(){
return(
    <>
<div className="loginback container">
   <div className="container m-auto login-subdiv row">
    <div className="container m-auto text-center col-md-7 col-lg-3 col-12">
        <img className="lapimg log-img col-8  col-md-6 col-lg-10" src={computer} />
        </div>
        <div className="container m-auto col-md-5 col-lg-9 col-12">
       <h3 className="text-center"> Member Login</h3>
            <form className="container text-center ">
                <div className="input-form  c"><FontAwesomeIcon icon={faEnvelope} className="text-dark"/>
                <input type="email" className=" log-email" placeholder="username"/>
                </div>
                <div className="input-form p-3 mt-3 d-flex mr-2"><FontAwesomeIcon icon={faLock} className="text-dark"/>
                <input type="password"  className="log-email" placeholder="password"/>
                </div>
                <button className="but bg-success text-light col-lg-6 col-md-6 col-9">Login</button>
                <div className=" text-center mt-2"><p className="  ">Forgot<a href="#" className="text-success ">Username/Password</a></p></div>
               <div className="text-center"> <a href="container"className="text-success">Create your account</a></div>
           </form>
           </div>

    </div>
</div>
   
 
</>
);
}
export default Login;