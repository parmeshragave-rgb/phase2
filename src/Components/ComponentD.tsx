import React from 'react'
import UserContext from './UseContext'
import { Context1 } from '../App'
import { useContext } from 'react'
function ComponentD() {
    const val1=useContext(UserContext)
    const val2=useContext(Context1)
  return (
    <>
    <h6>From UserContext {val1}</h6>
     <h6>From Context1 {val2}</h6>
    </>
  )
}

export default ComponentD