import React, { useEffect, useState } from 'react'

function IntervalCounter() {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(prev=> prev + 1)
            console.log("message");
        }, 1000);
        return ()=>{
            clearInterval(intervalId);
        }
    }, []
    )
  return (
    <div>
        <h1> count : {count}</h1>
    </div>
  )
}

export default IntervalCounter