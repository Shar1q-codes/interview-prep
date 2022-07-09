import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {

    const [Count, setCount]=useState(0)
  return (
    <div>
        {Count}
        <button onClick={()=>setCount(Count+1)}>Click me</button>
    </div>
  )

}

export default UseStateHook
