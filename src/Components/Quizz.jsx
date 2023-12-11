import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContexts } from '../Helpers/Contexts'
import "../App.css"

const Quizz = () => {
    const { score, setScore, setGameState } = useContext(QuizContexts);

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuestion = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    };

    const finishQuizz = () => {
        if (Questions[currentQuestion].correctAnswer === optionChosen) {
            setScore(score + 1)
        }
        setGameState("result")
    };


    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuizz}>Finish Quizz</button>)
                : (
                    <button onClick={nextQuestion}>Next Question</button>
                )}

        </div>
    )
}

export default Quizz