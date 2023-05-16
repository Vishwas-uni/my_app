import React, { useState } from 'react'

function CounterDecrement(props) {
    const {handleDecrement} = props

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterDecrement