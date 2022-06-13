import { useEffect, useState } from "react"
import RockIcon from "../../images/icon-rock.svg"

export default function Rock({ playerPick, gameState, timer }) {
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
        playerPick("rock")
    }

    return (
        <button onClick={handleClick} className={`disc ${timeReveal ? "hidden" : "flex"} justify-center items-center ${gameState === "pick" && "col-span-2 place-self-center"} ${gameState === "picked" && "bounce"} bg-gradient-to-t from-rock-from to-rock-to rounded-full w-32 h-32 md:w-48 md:h-48 z-10`} >
            <div className="inner-disc flex justify-center items-center bg-white rounded-full w-24 h-24 md:w-36 md:h-36 pointer-events-none">
                <img className="h-[40px] md:h-[60px]" src={RockIcon} alt="Pick Rock" />
            </div>
        </button>
    )
}