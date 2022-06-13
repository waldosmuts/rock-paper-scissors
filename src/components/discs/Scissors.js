import { useEffect, useState } from "react"
import ScissorsIcon from "../../images/icon-scissors.svg"

export default function Scissors({ playerPick, gameState, timer }) {
    const [timeReveal, setTimeReveal] = useState(timer || 0)

    useEffect(() => {
        if (timeReveal) {
            setTimeout(() => {
                setTimeReveal(0)
            }, timer)
        }
    }, [timer, timeReveal])

    function handleClick() {
        if (gameState !== "pick") return
        playerPick("scissors")
    }

    return (
        <button onClick={handleClick} className={`disc ${timeReveal ? "hidden" : "flex"} justify-center items-center ${gameState === "pick" && "place-self-start"} ${gameState === "picked" && "bounce"} bg-gradient-to-t from-scissors-from to-scissors-to rounded-full w-32 h-32 md:w-48 md:h-48 z-10`}>
            <div className="inner-disc flex justify-center items-center bg-white rounded-full w-24 h-24 md:w-36 md:h-36 pointer-events-none">
                <img className="h-[50px] md:h-[75px]" src={ScissorsIcon} alt="Pick Scissors" />
            </div>
        </button>
    )
}