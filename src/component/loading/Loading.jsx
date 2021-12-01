import { StyledLoading, StyledCircle } from "./Loading.styled";

function Loading({ color, width, height }) {
  return (
    <StyledLoading
      width={width}
      height={height}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircle
        color={color}
        fill="none"
        strokeWidth="7"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></StyledCircle>
    </StyledLoading>
  );
}

export default Loading;
