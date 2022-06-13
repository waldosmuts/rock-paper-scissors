import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  const [score, setScore] = useState(localStorage.getItem("score") || 0)
  const [gameState, setGameState] = useState("pick")

  useEffect(() => {
    localStorage.setItem("score", score)
  }, [score])

  return (
    <>
      <Header score={score} />
      <Main gameState={gameState} setGameState={setGameState} setScore={setScore} />
    </>
  )
}