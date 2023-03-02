import React from "react"
import { useState,useEffect } from "react"
import ControlButtons from "./ControlButtons"

const Counter = ()=>{
    const [isActive,setIsActive] = useState(false)
    const [isPause,setPause] = useState(false)
    const [counter,setCounter] = useState(0);
    
    useEffect(()=>{
        let int = null
        if(isActive && !isPause){
            int = setInterval(()=>{
                setCounter((counter)=>counter+1)
            },1000)
        }else{
            clearInterval(int)
        }
        return () =>{
            clearInterval(int)
        }

    },[isActive,isPause])
    const increaseCount = (e)=>{
        e.preventDefault();
        setIsActive(true);
        setPause(false);
    }
    const pauseResume = (e)=>{
        e.preventDefault();
        setPause(!isPause);
    }
    const resetCounter = (e)=>{
        e.preventDefault();
        setIsActive(false)
        setPause(false)
        setCounter(0);
    }
    return(
        <div className="flex flex-column align-center counter-container"> 
            <div className="count-label">
                {counter}
            </div>
            <ControlButtons 
                isActive={isActive} 
                isPause={isPause} 
                setStart={increaseCount}
                setPause={pauseResume} 
                setReset={resetCounter}>
            </ControlButtons>
            
        </div>
    )
}

export default Counter
