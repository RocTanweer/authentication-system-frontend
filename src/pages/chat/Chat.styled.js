import styled from "styled-components";
import { rem } from "../../utilities/functions";
import { flex } from "../../store/GlobalStyles.styled";

export const StyledChat = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChatImgWrapper = styled.div`
  ${flex}
  max-width: ${rem(1263.86)};
  margin: 0 auto;
  height: 89vh;
`;
