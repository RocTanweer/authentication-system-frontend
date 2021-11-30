import styled, { css } from "styled-components";
import { rem } from "../../utilities/functions";

const defaultInput = css`
  border: 1px solid #828282;
  outline: none;
  border-radius: ${rem(12)};
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: ${rem(17.71)};
  padding: ${rem(17)} ${rem(18.21)} ${rem(17)} ${rem(18.21)};
  width: ${rem(380.51)};

  &::placeholder {
    color: #bdbdbd;
  }
`;

const smallInput = css`
  padding: ${rem(10)} ${rem(0)};
  width: ${({ width }) => (width ? width : rem(291.59))};
  border: none;
  &::placeholder {
    color: #828282;
  }
`;

export const StyledInput = styled.input`
  ${defaultInput}
  ${({ small }) => small && smallInput}
`;
