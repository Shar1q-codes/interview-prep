import React from 'react'
import { useState } from 'react'

const FunctionalComponent = () => {
    const [count,setCount] = useState(0)

    
  return (
    <div>Functional Component
        <p>{count}<button onClick={()=>setCount(count+1)}>Increse</button></p>
        
    </div>
  )
}

export default FunctionalComponent