import React from "react";

const Card = (props) => {
  return <div style={{ ...styles.card, ...props.style }}>{props.children}</div>;
};

const styles = {
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 7,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    boxShadow: "#c8c8e2 1px 2px 2px 3px",
  },
};

export default Card;
