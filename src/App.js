import './App.css';
import { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quizz from './Components/Quizz';
import Result from './Components/Result';

import { QuizContexts } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);




  return (
    <div className="App">
      <h1>Quizz App</h1>
      <QuizContexts.Provider value={{ gameState, setGameState, score, setScore }} >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quizz />}
        {gameState === "result" && <Result />}
      </QuizContexts.Provider>
    </div>
  );
}

export default App;
