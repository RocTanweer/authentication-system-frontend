//i Custom components
import {
  DropDownButton,
  StyledNav,
  ProfileActions,
  ProfileActionWrapper,
  ArrowIcon,
  ProfileActionButton,
  LogoutButton,
  ProfileCard,
} from "./Nav.styled";
import logo from "../../assets/logo.svg";

//i data
import { profileActions } from "./data";

//i third party components
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

//i react hooks
import { useState } from "react";

/**
 * i instead of wrapping native <nav></nav> component, it wraps styled one
 * @param {} props it will accept any native html attr or any custom one for styled components
 * @returns  {} styled component
 */
function Nav() {
  const [isCollapse, setIsCollapse] = useState(false);

  const name = "Xanthe Neal";

  return (
    <StyledNav>
      <img src={logo} alt="main-logo" />
      <ProfileActionWrapper>
        <DropDownButton onClick={() => setIsCollapse((prev) => !prev)}>
          <img src="https://via.placeholder.com/32x36" alt="profile" />
          <span>{name}</span>
          <ArrowIcon $isCollapse={isCollapse} size={20} />
        </DropDownButton>

        <ProfileCard
          borderRadius={12}
          $isCollapse={isCollapse}
          width={188}
          height={174}
        >
          <ProfileActions>
            {profileActions.map((action) => {
              const { icon, name, id, href } = action;
              return (
                <li key={id}>
                  <ProfileActionButton as={Link} to={href}>
                    {icon} <span>{name}</span>
                  </ProfileActionButton>
                </li>
              );
            })}
          </ProfileActions>
          <LogoutButton>
            <RiLogoutBoxRLine size={19} />
            <span>Logout</span>
          </LogoutButton>
        </ProfileCard>
      </ProfileActionWrapper>
    </StyledNav>
  );
}

export default Nav;
