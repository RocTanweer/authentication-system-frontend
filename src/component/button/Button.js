import { StyledButton } from "./Button.styled";

/**
 * i instead of wrapping native <button></button> component, it wraps styled one
 * @param {} props it will accept any native html attr or any custom one for styled components
 * @returns  {} styled component
 */
function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
