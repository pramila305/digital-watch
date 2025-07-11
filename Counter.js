import React,{useState} from "react";
function Counter(){
    const [count,setCount]=useState(0);
    
    const IncNum=()=>{
      setCount(count+1)
    };

    const  DecNum=()=>{
      setCount(count-1)
    };

    const  ReSet=()=>{
      setCount(0)
    };
    return(
    <div>
        <h1>Counter App Design in react js</h1>
      <h1 style={{color:'red'}}>{count}</h1>
      <button onClick={IncNum}>Increment</button>
       <button onClick={DecNum}>Decrement</button>
        <button onClick={ReSet}>ReSet</button>

      
       
     </div>
    );
      

}
export default Counter;