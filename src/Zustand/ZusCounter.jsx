import React from 'react'
import useCounterStore from './useCounterStore'

function ZusCounter() {
  const { count, increment, decrement, clear,toggle,theme} = useCounterStore()

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}  -{theme ? 'light' :"Dark"}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>−</button>
      <button onClick={clear}>Reset</button>
      <button onClick={toggle}>Toggle</button>

    </div>
  )
}

export default ZusCounter
