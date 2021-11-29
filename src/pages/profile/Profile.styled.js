import styled from "styled-components";
import { rem } from "../../utilities/functions";

export const StyledProfile = styled.div`
  width: 100%;
`;

export const ProfileHeader = styled.header`
  margin-top: ${rem(60.2)};
  margin-bottom: ${rem(44.06)};
  text-align: center;

  h1 {
    font-weight: 400;
    font-size: ${rem(36)};
    line-height: ${rem(49.03)};
    letter-spacing: -0.035em;
    margin-bottom: ${rem(8)};
  }
  p {
    font-weight: 300;
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  }
`;
