import React from "react";
import Card from "../Components/Card";
import Color from "../constant/color";

const GameOver = (props) => {
  return (
    <Card style={styles.card}>
      <div>
        <h2>The Game is Over!</h2>
        <h3>Number of rounds: {props.roundNum}</h3>
        <p>Number was : {props.userNumber}</p>
        <button
          title="New Game"
          style={styles.button}
          onClick={props.onRestart}
        >
          New Game
        </button>
      </div>
    </Card>
  );
};

const styles = {
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 10,
    margin: 20,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    backgroundColor: Color.restart,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
};

export default GameOver;
