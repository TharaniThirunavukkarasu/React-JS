import React, { useEffect, useState } from "react";
import product from './products.jpg'

function Display(){
const[viewdata,setviewdata]=useState([])
useEffect(()=>{
    fetch("https://fakestoreapi.com/products/")
    .then (res=> res.json())
    .then(data=>setviewdata(data))
})
return(
<>
<div className="container-fluid d-flex row bg-secondary"> 
{viewdata.map((value,index)=>(
<>
<div className="card col-lg-3 d-flex ms-auto m-3 bg-light h-20">
<div className="card-title text-center">
    <img src={value.image} className="card-img bg-dark h-10"/>
    <h4 className="card-title text-center">{value.title}</h4>
    <p className="card-text text-light">{value.price}</p>
    <p className="card-text text-light">{value.description}</p>
    <p className="card-text text-light">{value.category}</p>
     <button className="bg-primary"><a  href="#" className="btn ">Next Look</a></button>
</div>
</div>
</>

))}
</div>
</>
);
}

export default Display;