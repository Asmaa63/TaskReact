import React, { useEffect, useState } from 'react'

function WindowResize() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handelResize = ()=>{
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handelResize);
        return ()=>{
            window.removeEventListener("resize", handelResize);
        }
    }, [])

  return (
    <div>current window width : {width}</div>
  )
}

export default WindowResize