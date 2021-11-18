import styled from "styled-components";
import { flex } from "../../store/GlobalStyles.styled";
import { rem } from "../../utilities/functions";
import { defaultButton } from "../../component/button/Button.styled";
import Card from "../../component/card/Card";
import { MdArrowDropDown } from "react-icons/md";

export const StyledProfile = styled.div`
  width: 100%;
`;

export const StyledNav = styled.nav`
  ${flex}
  justify-content: space-between;
  max-width: ${rem(1263.86)};
  margin: 0 auto;
  height: auto;
  padding: 0 ${rem(28.06)} 0 ${rem};
`;

export const ProfileActionWrapper = styled.div`
  position: relative;
  width: auto;
`;

export const ProfileCard = styled(Card)`
  display: ${({ $isCollapse }) => ($isCollapse ? "block" : "none")};
  position: absolute;
  top: ${rem(59)};
  left: ${rem(-42)};
  box-shadow: 0px 2px 4px 0px #00000080;
  padding: ${rem(14.94)} ${rem(11.96)} ${rem(24.5)} ${rem(11.96)};
`;

export const ProfileActions = styled.ul`
  width: 100%;
  height: auto;
  list-style: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: ${rem(12.95)};
`;

export const DropDownButton = styled.button`
  ${defaultButton}
  ${flex}
  justify-content: space-between;
  color: #333333;
  font-weight: 700;
  border: none;
  min-width: ${rem(140)};

  span {
    margin-left: ${rem(11)};
  }

  &:hover {
    opacity: 1;
    transform: none;
  }
`;

export const ArrowIcon = styled(MdArrowDropDown)`
  transform: rotate(${({ $isCollapse }) => ($isCollapse ? "180deg" : "0deg")});
`;

export const ProfileActionButton = styled.button`
  ${defaultButton}
  ${flex}
  justify-content: start;
  border: none;
  color: #4f4f4f;
  font-size: ${rem(12)};
  line-height: ${rem(16.34)};
  padding: ${rem(11.24)} ${rem(13.35)};
  width: 100%;
  text-align: left;

  span {
    margin-left: ${rem(11)};
  }
`;

export const LogoutButton = styled(ProfileActionButton)`
  color: #eb5757;
`;
