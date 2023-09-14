import React,{useState} from 'react'
import './fruits.css'
import mango from './download (1).jpg'
import banana from './banana.jpg'

function Fruits() {
  const[mangos,setMango]=useState(0);
  const[bananas,setBanana]=useState(0);
  return (
    <div className='fruitsmain'>
      <div className='fruitback bg-light container col-12 col-lg-6'>
        <h1 className='text-center p-2 col-12'>Bob ate <span className='text-success'>{mangos}</span> mangoes <span  className='text-success'>{bananas}</span> bananas</h1>
        
        <div className='row mx-auto '>
       <div className='col-lg-4 card  col-md-4 col-sm-4'>
        <img src={mango} className='col-lg-10 col-6 col-md-4 col-sm-4'/>
        <button onClick={()=>setMango(mangos+1)} className="but-fruit bg-primary mx-auto m-auto p-2 text-light ">Eat Mango</button>
       </div>
       <div className='col-lg-4 card  col-md-4 col-sm-4'>
       <img src={banana} className='col-lg-10 col-6 col-md-4 col-sm-4'/>
       <button onClick={()=>setBanana(bananas+1)} className="but-fruit bg-primary  m-5 p-2 m-auto text-light ">Eat Banana</button>
       </div>
        </div>
      </div>
    </div>

  )
}
export default Fruits
