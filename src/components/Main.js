import { useEffect, useState } from "react"

import Pick from "./Pick"
import Picked from "./Picked"

export default function Main({ gameState, setGameState, setScore }) {
    const [playerChoice, setPlayerChoice] = useState("")
    const [botChoice, setBotChoice] = useState("")
    const [gameResult, setGameResult] = useState("")

    function playerPick(choice) {
        setPlayerChoice(choice)
    }

    useEffect(() => {
        if (gameState === "pick") {
            setTimeout(() => {
                setPlayerChoice("")
                setBotChoice("")
                setGameResult("")
            }, 300)
        }
    }, [gameState])

    useEffect(() => {
        if (!playerChoice) return
        function botPick() {
            const botChoices = ["rock", "paper", "scissors"]
            const random = Math.floor(Math.random() * 3)
            setBotChoice(botChoices[random])
            setGameState("picked")
        }
        botPick()
        // eslint-disable-next-line
    }, [playerChoice])

    useEffect(() => {
        if (!botChoice) return
        if ((playerChoice === "rock" && botChoice === "scissors") ||
            (playerChoice === "scissors" && botChoice === "paper") ||
            (playerChoice === "paper" && botChoice === "rock")) {
            setGameResult("W")
            setScore(prevScore => ++prevScore)
        } else if ((botChoice === "rock" && playerChoice === "scissors") ||
            (botChoice === "scissors" && playerChoice === "paper") ||
            (botChoice === "paper" && playerChoice === "rock")) {
            setGameResult("L")
        } else {
            setGameResult("D")
        }
        // eslint-disable-next-line
    }, [botChoice])

    return (
        <main className="relative h-full overflow-hidden">
            <Pick gameState={gameState} playerPick={playerPick} />
            <Picked gameState={gameState} setGameState={setGameState} playerChoice={playerChoice} botChoice={botChoice} gameResult={gameResult} />
        </main>
    )
}