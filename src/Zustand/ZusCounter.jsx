import React from 'react'
import useCounterStore from './useCounterStore'

function ZusCounter() {
  const { count, increment, decrement, clear } = useCounterStore()

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>−</button>
      <button onClick={clear}>Reset</button>
    </div>
  )
}

export default ZusCounter
