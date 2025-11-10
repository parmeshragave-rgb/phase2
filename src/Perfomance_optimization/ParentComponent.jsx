import React, { useState,useCallback } from 'react'
import Title from './Title'
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    const[age,setAge]=useState(20);
    const[salary,setSalary]=useState(66000);
    
    const incrementage=useCallback(
        () => {
             setAge(age+1)
        },[age]

    )
   
    const incrementSalary = useCallback(() => {
        setSalary(salary+(salary/10))
    },[salary])
  return (
    <>
    <Title/>
    <Count text="Age" count={age}/>
    <Button handleclick={incrementage}>Increment Age</Button>
    <Count text="Salary" count={salary}/>
    <Button handleclick={incrementSalary}>Increment Salary</Button>


    </>
  )
}

export default ParentComponent