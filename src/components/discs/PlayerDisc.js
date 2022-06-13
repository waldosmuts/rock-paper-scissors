import Rock from "./Rock"
import Paper from "./Paper"
import Scissors from "./Scissors"

export default function PlayerDisc({ playerChoice }) {
    if (playerChoice === "rock") {
        return <Rock gameState="picked" timer={1000} />
    }
    if (playerChoice === "paper") {
        return <Paper gameState="picked" timer={1000} />
    }
    if (playerChoice === "scissors") {
        return <Scissors gameState="picked" timer={1000} />
    }
}