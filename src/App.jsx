import { useEffect, useRef, useState } from 'react'
import Die from './Die'
import {nanoid} from 'nanoid'
import { useWindowSize } from 'react-use'
import Confetti from "react-confetti";

const App = () => {

  const generateAllNewDice = () => {
    return new Array(10)
      .fill()
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  }
  
  const {width, height} = useWindowSize()

  const [dice, setDice] = useState(() => generateAllNewDice())

  const buttonRef = useRef(null)

  const gameWon = dice.every(die => die.isHeld) &&
      dice.every(die => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }
  },[gameWon])

  const diceElement = dice.map(dieObj => 
    <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld}
      hold={hold}
      id={dieObj.id}
    />
  )

  const diceRoll = () => {
   if (!gameWon) {
     setDice(prevDice => prevDice.map(die => 
     die.isHeld ? 
      die :
      {...die, value: Math.ceil(Math.random() * 6)}
    ))
   } else {
    setDice(generateAllNewDice())
   }
  }

  const hold = (id) => {
    setDice(prevDice => prevDice.map(die =>
      die.id === id ?
      {...die, isHeld: !die.isHeld} :
      die
    ))
  }

  
  return (
    <main>
      {gameWon && <Confetti width={width} height={height}/>}
      <div aria-live="polite" className='sr-only'>
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElement}
      </div>
      <button ref={buttonRef} className='dice-roll' onClick={diceRoll}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App