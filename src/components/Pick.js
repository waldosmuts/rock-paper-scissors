import Rock from "./discs/Rock"
import Paper from "./discs/Paper"
import Scissors from "./discs/Scissors"

export default function Pick({ gameState, playerPick }) {
    function TriangleBackground() {
        return (
            <svg className="absolute top-24 md:top-36 left-1/2 -translate-x-1/2 opacity-20 scale-[70%] md:scale-100 fill-transparent stroke-[25px] md:stroke-[15px] stroke-black" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
                <polygon points="150 250, 20 25, 280 25" />
            </svg>
        )
    }

    return (
        <div className={`absolute top-0 left-0 h-full w-screen ${gameState === "pick" ? "translate-x-0" : "-translate-x-[200vw]"} transition duration-300`}>
            <TriangleBackground />
            <div className="grid grid-cols-2 gap-x-14 gap-y-6 md:gap-x-[80px] md:gap-y-10 relative top-24 md:top-[70px] w-screen">
                <Paper playerPick={playerPick} gameState="pick" />
                <Scissors playerPick={playerPick} gameState="pick" />
                <Rock playerPick={playerPick} gameState="pick" />
            </div>
        </div>
    )
}