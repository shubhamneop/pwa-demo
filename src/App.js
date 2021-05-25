import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import StartGame from "./Screen/StartGame";
import GameScreen from "./Screen/GameScreen";
import GameOver from "./Screen/GameOver";
import { ToastContainer } from "react-toastify";

function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNubmer) => {
    setUserNumber(selectedNubmer);
    setGuessRounds(0);
  };

  const gameOverHandler = (numofRounds) => {
    setGuessRounds(numofRounds);
  };
  let content = <StartGame onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        roundNum={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }
  return (
    <>
      <ToastContainer />
      <div style={{ flex: "1" }}>
        <Header title="Guess A Number" />
        {content}
      </div>
    </>
  );
}

export default App;
