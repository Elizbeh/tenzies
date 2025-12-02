import React from 'react'

const Die = ({value, isHeld, hold, id}) => {
  return (
    <button 
    style={{backgroundColor: isHeld && "#59E391"}}
    onClick={() => hold(id)}
    aria-pressed={isHeld}
    aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  )
}

export default Die