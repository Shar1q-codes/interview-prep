import React,{useState,useMemo} from "react";

const UseMemo = () =>{
    const[increase,setIncrease]= useState(0);
    const[decrease,setDecrease]= useState(100);
    const multiplyMemo = useMemo(function multiply(){
        console.log("it is rendering")
        return increase*10;
     },[increase])
    
return(<div>

<h1>UseMemo.</h1>

<h2>increased no is {increase}</h2>
<h2>decrease no is {decrease}</h2>
   <h2>{multiplyMemo}</h2>
<button onClick={()=>setIncrease(increase+5)}>increase button👆</button>
<button onClick={()=>setDecrease(decrease-2)}>decrease button👇</button>

</div>)
}
export default UseMemo;