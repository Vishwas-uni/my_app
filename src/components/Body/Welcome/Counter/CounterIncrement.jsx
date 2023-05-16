import React, { useState } from 'react'

function CounterIncrement(props) {
    const {handleIncrement}= props

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default CounterIncrement