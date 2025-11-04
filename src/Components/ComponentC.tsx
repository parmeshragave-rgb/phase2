import React from 'react'
import { UserConsumer } from './UseContext'
import ComponentD from './ComponentD'
import { Context1 } from '../App'

function ComponentC() {
  return (

    <>
     <UserConsumer>
        {
        (name1) =>  { return (
          <Context1.Consumer>
            {
              (name2) => {return (
               <h6>From component C :{name1} {name2}</h6>
                       
        )}
  }
            </Context1.Consumer>
  )}


    }
    </UserConsumer>

    <ComponentD/>

    </>
  )
}

export default ComponentC

