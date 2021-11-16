import React from "react";
import { StyledCard } from "./Card.styled";

function Card(props) {
  return <StyledCard {...props}>{props.children}</StyledCard>;
}

export default Card;
