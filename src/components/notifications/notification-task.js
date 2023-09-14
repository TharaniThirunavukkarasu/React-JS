import React from "react";
import './notificationsymbol.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

function Notification(){
return(
<div className="notifi-main">
<h1 className="text-center">Notifications</h1>
<div className="noti-bar bg-primary p-3 text-light"><FontAwesomeIcon icon={faCheckCircle} className="sizing"/>  Information Message</div>
<div className="noti-bar bg-success p-3  text-light"><FontAwesomeIcon icon={faCheckCircle} className="sizing"/>  Success Message</div>
<div className="noti-bar bg-warning p-3  text-light"><FontAwesomeIcon icon={faBell} className="sizing"/> Warning Message</div>
<div className="noti-bar bg-danger p-3  text-light"><FontAwesomeIcon icon={faWarning} className="sizing"/> Error Message</div> 
</div>
    );
}
export default Notification;