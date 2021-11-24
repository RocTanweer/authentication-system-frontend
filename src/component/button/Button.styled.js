import styled, { css } from "styled-components";
import { rem } from "../../utilities/functions";

export const defaultButton = css`
  display: inline-block;
  line-height: ${rem(21.79)};
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding-top: ${rem(8)};
  padding-bottom: ${rem(8)};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${rem(8)};
  border: 1px solid currentColor;
  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
    transform: scale(0.98);
  }
`;

const primaryButton = css`
  border-color: #2f80ed;
  background-color: #2f80ed;
  color: #ffffff;
`;

const neutralButton = css`
  border-color: #828282;
  background-color: #ffffff;
  color: #828282;
`;

const blockSizeButton = css`
  width: 100%;
`;

const mdSizeButton = css`
  padding-left: ${rem(35.19)};
  padding-right: ${rem(32.15)};
`;
const smSizeButton = css`
  padding-left: ${rem(24)};
  padding-right: ${rem(24)};
`;

export const StyledButton = styled.button`
  ${defaultButton}

  ${({ primary }) => primary && primaryButton}
  ${({ neutral }) => neutral && neutralButton}
  ${({ md }) => md && mdSizeButton}
  ${({ sm }) => sm && smSizeButton}
  ${({ block }) => block && blockSizeButton}
`;
