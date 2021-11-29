import React from "react";
import { StyledInput } from "./input.styled";

/**
 * i instead of wrapping native <input></input> component, it wraps styled one
 * @param {} props it will accept any native html attr or any custom one for styled components
 * @returns  {} styled component
 */
function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
