import React from "react";
import './congrats.css'
import person from './person.jpg'
import watch from './watch1.jpg'
import client from './download.png'


function Card(){
    return(
        <>
            <div className="congratsback">
                    <h1 className="text-dark text-center">Congratulations</h1>
                    <div className="person mx-auto col-lg-4 p-5">
                        <img src={person} className="col-lg-2"/>
                        <h2>Kiran V</h2>
                        <p>Vishnu institute of technology</p>
                        <p>Coimbatore</p>
                        <img src={watch} className=" congrats-person1 col-lg-2  col-6 "/>
                    </div>
            </div>
        </>
    );
    
}               
export default Card;