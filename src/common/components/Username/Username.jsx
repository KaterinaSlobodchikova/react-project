import React from "react";
import { StyledUsername } from "./styled";

export const Username = React.memo((props) => {
  const { name } = props;

  console.log("username rendered");
  return <StyledUsername>Hello, {name}!</StyledUsername>;
});
