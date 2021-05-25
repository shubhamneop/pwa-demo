import React from "react";

const Input = (props) => {
  return <input {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = {
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
};

export default Input;
