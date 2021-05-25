import React, { useState, useRef, useEffect } from "react";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/Card";
import Colours from "../constant/color";
import { toast } from "react-toastify";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoise)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoise, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoise) ||
      (direction === "greater" && currentGuess > props.userChoise)
    ) {
      toast.dark(`Don't lie!, You konw that this is wrong...`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (direction == "lower") {
      currentHigh.current = currentGuess;
      generateRandomBetween(1);
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currnetRound) => currnetRound + 1);
  };
  return (
    <div style={styles.screen}>
      <h2>Opponent's Guess</h2>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <button
          title="LOWER"
          style={{ ...styles.button, backgroundColor: Colours.lower }}
          onClick={nextGuessHandler.bind(this, "lower")}
        >
          LOWER
        </button>
        <button
          title="GREATER"
          style={{ ...styles.button }}
          onClick={nextGuessHandler.bind(this, "greater")}
        >
          GREATER
        </button>
      </Card>
    </div>
  );
};

const styles = {
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    display: "flex",
  },
  button: {
    backgroundColor: Colours.greater /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
};

export default GameScreen;
