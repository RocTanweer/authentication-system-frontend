import React from "react";
import { StyledCard } from "./Card.styled";

/**
 * i instead of wrapping native <div></div> component, it wraps styled one
 * @param {} props it will accept any native html attr or any custom one for styled components
 * @returns  {} styled component
 */
function Card(props) {
  return <StyledCard {...props}>{props.children}</StyledCard>;
}

export default Card;
