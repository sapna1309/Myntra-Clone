import {useEffect, useRef, useState} from "react"
export const useThrottle =(value,delay)=>{
 const throttleId =useRef(false) 
const [throttledText,setThrottledText] = useState(value)
useEffect(()=>{
if(!throttleId.current ){
    throttleId.current = true
    setTimeout(()=>{
        throttleId.current =false
        setThrottledText(value)
    },delay)
}
},[delay,value])
return throttledText
}