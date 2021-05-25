import React from "react";
import Colours from "../constant/color";

const NumberContainer = (props) => {
  return (
    <div style={styles.container}>
      <p style={styles.number}>{props.children}</p>
    </div>
  );
};

const styles = {
  container: {
    borderWidth: 2,
    borderColor: Colours.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colours.accent,
    fontSize: 22,
  },
};

export default NumberContainer;
