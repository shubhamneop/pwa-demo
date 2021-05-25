import React from "react";
import color from "../constant/color";

const style = {
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  headerTitle: {
    color: "black",
  },
};
function Header({ title }) {
  return (
    <div style={style.header}>
      <h1 style={style.headerTitle}> {title} </h1>
    </div>
  );
}

export default Header;
