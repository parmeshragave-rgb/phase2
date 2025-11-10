import Button from '@mui/material/Button';
import React from 'react'
import { useState,useMemo } from 'react'
function Memo() {
const[counter1,setcounter1]=useState(0);
const[counter2,setcounter2]=useState(0);

const incremetcounter1=() => {
    setcounter1(counter1+1)
}
const incremetcounter2=() => {
    setcounter2(counter2+1)
}
const isEven = useMemo(() => {
    let i=0;
    while(i<2000000000) i++;
    return counter1%2===0
},[counter1])

  return (
    <>
    <br/>
 <button onClick={incremetcounter1}>C1 : {counter1}-{isEven ? "Even" : "Odd"}</button> 
<button onClick={incremetcounter2}>C2 : {counter2}</button>

    </>
  )
}

export default Memo