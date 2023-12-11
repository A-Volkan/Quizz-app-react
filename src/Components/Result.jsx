
import React, { useContext } from 'react'
import { QuizContexts } from '../Helpers/Contexts'
import "../App.css"
import { Questions } from '../Helpers/QuestionBank'

const Result = () => {
    const { score } = useContext(QuizContexts)
    const { setScore } = useContext(QuizContexts)
    const { setGameState } = useContext(QuizContexts)

    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }


    return (
        <div className="Result">{""}
            <h1>Quizz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restartQuiz}>Play Again</button>
        </div>
    )
}

export default Result