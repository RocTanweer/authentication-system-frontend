import styled from "styled-components";
import { rem } from "../../utilities/functions";
import { StyledCard } from "../../component/card/Card.styled";

export const StyledSignup = styled.section`
  width: 100%;
  height: 100%;
  padding: ${rem(48.42)} ${rem(58.78)} ${rem(43.07)} ${rem(58.57)};

  .signup-suggestion {
    text-align: center;
    font-size: ${rem(14)};
    font-weight: 400;
    color: #828282;
  }

  strong {
    display: block;
    font-size: ${rem(18)};
    color: #333333;
    width: ${rem(318)};
    line-height: ${rem(24.52)};
    margin-bottom: ${rem(14.5)};
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: ${rem(27.47)};
  img {
  }
`;

export const SignupForm = styled.form`
  margin-top: ${rem(34.66)};
  margin-bottom: ${rem(31.58)};
`;

export const InputCard = styled(StyledCard)`
  justify-content: space-evenly;
`;
