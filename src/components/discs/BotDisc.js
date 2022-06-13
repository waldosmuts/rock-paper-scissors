import Rock from "./Rock"
import Paper from "./Paper"
import Scissors from "./Scissors"

export default function BotDisc({ botChoice }) {
    if (botChoice === "rock") {
        return <Rock gameState="picked" timer={2000} />
    }
    if (botChoice === "paper") {
        return <Paper gameState="picked" timer={2000} />
    }
    if (botChoice === "scissors") {
        return <Scissors gameState="picked" timer={2000} />
    }
}