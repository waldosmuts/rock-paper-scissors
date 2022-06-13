import PlayerDisc from "./discs/PlayerDisc"
import BotDisc from "./discs/BotDisc"
import { useEffect, useState } from "react"

export default function Picked({ gameState, setGameState, playerChoice, botChoice, gameResult }) {
    function Result() {
        const [showResult, setShowResult] = useState(false)

        useEffect(() => {
            if (!botChoice) return
            setTimeout(() => {
                setShowResult(true)
            }, 3500)
        }, [])

        return (
            <>
                <span className={`${showResult ? "opacity-100" : "opacity-0"} transition duration-300 text-white font-barlow uppercase text-[56px]`}>{gameResult === "W" && "You Win"}{gameResult === "L" && "You Lose"}{gameResult === "D" && "Draw"}</span>
                <button onClick={() => (setGameState("pick"))} className={`${showResult ? "opacity-100" : "opacity-0"} transition duration-300 bg-white text-dark font-barlow uppercase px-16 py-3 rounded-lg tracking-[0.125rem] mt-3 animate-tiny-bounce`}>Play Again</button>
            </>
        )
    }

    return (
        <div className={`flex flex-col items-center justify-end md:justify-center pb-36 absolute top-0 left-0 h-full w-screen ${gameState === "picked" ? "translate-x-0" : "translate-x-[200vw]"} transition duration-300`}>
            <div className="absolute top-24 left-1/2 -translate-x-1/2 flex pointer-events-none md:gap-x-96">
                <div className="flex flex-col items-center gap-y-8 place-self-end w-48">
                    <div className="absolute md:top-[52px] bg-black opacity-30 w-28 h-28 md:w-44 md:h-44 m-2 rounded-full -z-10" />
                    <div className="flex justify-center items-center w-32 h-32 md:w-48 md:h-48">
                        <div className="absolute bg-white w-28 h-28 md:w-32 md:h-32 rounded-full -z-10 animate-ping-1" />
                        <div className="absolute bg-white w-28 h-28 md:w-32 md:h-32 rounded-full -z-10 animate-ping-2" />
                        <div className="absolute bg-white w-28 h-28 md:w-32 md:h-32 rounded-full -z-10 animate-ping-3" />
                        <PlayerDisc playerChoice={playerChoice} />
                    </div>
                    <span className="text-white uppercase font-barlow tracking-[0.125rem] text-sm text-center md:-order-1">You Picked</span>
                </div>
                <div className="flex flex-col items-center gap-y-8 place-self-start w-48">
                    <div className="absolute md:top-[52px] bg-black opacity-30 w-28 h-28 md:w-44 md:h-44 m-2 rounded-full -z-10" />
                    <div className="w-32 h-32 md:w-48 md:h-48">
                        <BotDisc botChoice={botChoice} />
                    </div>
                    <span className="text-white uppercase font-barlow tracking-[0.125rem] text-sm text-center md:-order-1">The House Picked</span>
                </div>
            </div>
            <Result />
        </div>

    )
}