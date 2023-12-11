import React, { useContext } from 'react'
import { QuizContexts } from '../Helpers/Contexts'
import "../App.css"

const MainMenu = () => {

    const { gameState, setGameState } = useContext(QuizContexts)


    return (
        <div className="Menu">
            <button onClick={() => setGameState("quiz")}>
                Start Quizz
            </button>
        </div>
    )
}

export default MainMenu