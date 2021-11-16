import styled from "styled-components";
import { rem } from "../../utilities/functions";
import { StyledCard } from "../../component/card/Card.styled";

export const StyledLogin = styled.section`
  width: 100%;
  height: 100%;
  padding: ${rem(48.42)} ${rem(58.78)} ${rem(43.07)} ${rem(58.57)};

  .signup-suggestion {
    text-align: center;
    font-size: ${rem(14)};
    font-weight: 400;
    color: #828282;
  }

  h2 {
    font-weight: 600;
    font-size: ${rem(18)};
    line-height: ${rem(24.52)};
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: ${rem(27.47)};
  img {
  }
`;

export const LoginForm = styled.form`
  margin-top: ${rem(27.25)};
  margin-bottom: ${rem(22.51)};
`;

export const InputCard = styled(StyledCard)`
  justify-content: space-evenly;
`;
