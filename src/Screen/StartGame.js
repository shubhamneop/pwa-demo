import React, { useState } from "react";
import Colours from "../constant/color";
import Input from "../Components/Input";
import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";
import { toast } from "react-toastify";

const StartGame = (props) => {
  const [enteredValue, setEnteredvalue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredvalue(inputText.target.value.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredvalue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      toast.error(`Invalid number Number has to be number between 1 and 99.`, {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredvalue("");
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <h1>You seleted</h1>
        <NumberContainer> {selectedNumber}</NumberContainer>
        <button
          title="START GAME"
          style={{ ...styles.button, backgroundColor: Colours.start }}
          color={Colours.start}
          onClick={() => props.onStartGame(selectedNumber)}
        >
          START GAME
        </button>
      </Card>
    );
  }

  return (
    <div style={styles.screen}>
      <h1 style={styles.title}>Start a New Game</h1>
      <Card style={styles.inputConatiner}>
        <p>Select a Number</p>
        <Input
          style={styles.input}
          autoCapitalize="none"
          maxLength={2}
          onChange={numberInputHandler}
          value={enteredValue}
        />
        <div style={styles.buttonContainer}>
          <div style={styles.buttondiv}>
            <button
              title="Reset"
              style={{ ...styles.button, backgroundColor: Colours.accent }}
              onClick={resetInputHandler}
            >
              Reset
            </button>
          </div>
          <div style={styles.buttondiv}>
            <button onClick={confirmInputHandler} style={styles.button}>
              Confirm
            </button>
          </div>
        </div>
      </Card>
      {confirmedOutput}
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputConatiner: {
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
  },
  buttondiv: {
    width: 100,
  },
  input: {
    textAlign: "center",
    marginBottom: "1em",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: Colours.primary,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
};

export default StartGame;
