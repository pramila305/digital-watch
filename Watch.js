import React ,{useState} from 'react'

const Watch =()=>{
let watch=new Date().toLocaleTimeString();
const [time,setTime]=useState(watch);

const updateFunction=()=>{
    let watch=new Date().toLocaleTimeString();
    setTime(watch)  
}
setInterval(updateFunction,1000);


    return(
        <div>
            <h1>Digital Watch without button </h1>
            <h2>{watch}</h2>
        </div>
    )
}
export default Watch;