
import React from 'react'
function Count(props) {
console.log(`rendering ${props.text}`)
    
  return (
    <div>{props.text} : {props.count}</div>
  )
}

export default React.memo(Count)