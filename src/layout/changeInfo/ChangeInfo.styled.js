import styled from "styled-components";
import Card from "../../component/card/Card";
import { rem } from "../../utilities/functions";
import { Wrapper } from "../profile/ProfileDetails.styled";
import Input from "../../component/input/Input";

export const StyledSection = styled.section``;

export const ChangeInfoForm = styled.form`
  div {
    margin-bottom: ${rem(24)};
  }

  label {
    margin-bottom: ${rem(3.83)};
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }
`;

export const InputCard = styled(Card)`
  justify-content: flex-start;
  padding: ${rem(17)} ${rem(18.21)};

  .textarea {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-family: "noto sans", sans-serif;
    resize: none;

    &::placeholder {
      font-weight: 400;
      font-size: ${rem(13)};
      color: #bdbdbd;
      line-height: ${rem(22)};
      letter-spacing: -0.035em;
    }
  }
`;

export const WrapperCI = styled(Wrapper)`
  padding: ${rem(30.66)} ${rem(46.93)};
  border-width: 1px;

  header {
    padding: 0;
    margin-bottom: ${rem(25.89)};
  }
`;

export const InputCI = styled(Input)`
  &::placeholder {
    color: #bdbdbd;
    font-size: ${rem(13)};
  }
`;
