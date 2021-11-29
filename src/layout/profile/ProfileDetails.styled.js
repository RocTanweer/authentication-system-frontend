import styled, { css } from "styled-components";
import { rem } from "../../utilities/functions";
import Card from "../../component/card/Card";
import { flex } from "../../store/GlobalStyles.styled";

const grid = css`
  display: grid;
  grid-template-columns: 30.9% 69.1%;
`;

export const StyledProfileDetails = styled.section``;

export const Wrapper = styled(Card)`
  margin: 0 auto;
  display: block;
  height: auto;

  header {
    ${flex}
    justify-content: space-between;
    padding: ${rem(49.3)} ${rem(28.32)} ${rem(48.84)} ${rem(29.51)};
    border-bottom: 1px solid #e0e0e0;

    h2 {
      margin-bottom: ${rem(4)};
      font-weight: 400;
      font-size: ${rem(24)};
      line-height: ${rem(32.69)};
      color: #000000;
    }

    p {
      font-weight: 500;
      color: #828282;
      font-size: ${rem(13)};
      line-height: ${rem(17.71)};
    }
  }
`;

export const List = styled.dl`
  list-style: none;
  width: 100%;
  height: 100%;

  div {
    ${grid}
    padding: 0 ${rem(49.3)};
    height: auto;

    &:not(:last-child) {
      border-bottom: 1px solid #e0e0e0;
    }

    &:first-child {
      padding-top: ${rem(11.59)};
      padding-bottom: ${rem(17.53)};
    }

    &:nth-child(2) {
      padding-top: ${rem(24)};
      padding-bottom: ${rem(24.26)};
    }
    &:nth-child(3) {
      padding-top: ${rem(23.74)};
      padding-bottom: ${rem(24.53)};
    }
    &:nth-child(4) {
      padding-top: ${rem(21.14)};
      padding-bottom: ${rem(25.17)};
    }
    &:nth-child(5) {
      padding-top: ${rem(24)};
      padding-bottom: ${rem(24)};
    }
    &:nth-child(6) {
      padding-top: ${rem(26.33)};
      padding-bottom: ${rem(22.63)};
    }

    dt {
      ${flex};
      justify-content: flex-start;
      color: #bdbdbd;
      font-weight: 500;
      font-size: ${rem(13)};
      line-height: ${rem(18)};
      letter-spacing: -0.035em;
      text-transform: uppercase;
    }

    dd {
      font-weight: 500;
      font-size: ${rem(18)};
      line-height: ${rem(25)};
      letter-spacing: -0.035em;
      color: #333333;
    }
  }
`;
