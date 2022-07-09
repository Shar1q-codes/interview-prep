import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectHook = () => {

    const [Count, setCount]=useState(0)
    useEffect(()=>
        console.log("Component updated using useEffect after clicking")
    );
  return (
    <div>
        <p>Open console to see the useEffect  msg</p>
        {Count}
        <button onClick={()=>setCount(Count+1)}>Click me</button>
    </div>
  )

}

export default UseEffectHook