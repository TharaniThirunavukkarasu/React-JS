import React, { useState } from "react";
import './hooks.css'

function Hooks(){
const [count,setCount]=useState(0);
return(
    <>
<div className="text-center">
<h1>{count}</h1>
<button className="bg-primary text-light m-2" onClick={()=>setCount(count+10)}>Add</button>
 <button className="bg-primary text-light m-2" onClick={()=>setCount(count-2)}>Sub</button>
<button className="bg-primary text-light m-2" onClick={()=>setCount(count*0)}>Reset</button> 
</div>
</>
);
}
export default Hooks;