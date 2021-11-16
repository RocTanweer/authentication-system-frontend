import styled from "styled-components";
import { rem } from "../../utilities/functions";
import { flex } from "../../store/GlobalStyles.styled";

export const StyledCard = styled.div`
  ${flex};
  width: ${({ width }) => rem(width)};
  height: ${({ height }) => rem(height)};
  border: 1px solid #bdbdbd;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? rem(borderRadius) : rem(24)};
  margin-bottom: ${({ mb }) => mb && rem(mb)};
  margin-top: ${({ mt }) => mt && rem(mt)};
  margin-left: ${({ ml }) => ml && rem(ml)};
  margin-right: ${({ mr }) => mr && rem(mr)};
  margin: ${({ margin }) => margin && rem(margin)};
`;
