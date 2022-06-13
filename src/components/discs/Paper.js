import { useEffect, useState } from "react"
import PaperIcon from "../../images/icon-paper.svg"

export default function Paper({ playerPick, gameState, timer }) {
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
        playerPick("paper")
    }

    return (
        <button onClick={handleClick} className={`disc ${timeReveal ? "hidden" : "flex"} justify-center  ${gameState === "pick" && "place-self-end"} ${gameState === "picked" && "bounce"} items-center bg-gradient-to-t from-paper-from to-paper-to rounded-full w-32 h-32 md:w-48 md:h-48 z-10`}>
            <div className="inner-disc flex justify-center items-center bg-white rounded-full w-24 h-24 md:w-36 md:h-36 pointer-events-none">
                <img className="h-[50px] md:h-[70px]" src={PaperIcon} alt="Pick Paper" />
            </div>
        </button>
    )
}