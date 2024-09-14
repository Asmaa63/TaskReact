import React, { useEffect, useState } from 'react'

function CounterComponentEX() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("component rendered or re-rendered")
    })
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(prev=> prev+1 )}>incremant</button>
    </div>
  )
}

export default CounterComponentEX