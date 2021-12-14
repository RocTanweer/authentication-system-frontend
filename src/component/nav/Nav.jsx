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
import Loading from "../loading/Loading";

//i data
import { profileActions } from "./data";

//i third party components
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

//i react hooks
import { useState } from "react";
import { useGlobalContext } from "../../store/GlobalContextProvider";

import { logout } from "../../actions";

/**
 * i instead of wrapping native <nav></nav> component, it wraps styled one
 * @param {} props it will accept any native html attr or any custom one for styled components
 * @returns  {} styled component
 */
function Nav() {
  const [isCollapse, setIsCollapse] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  const {
    userLogout: { loading: logoutLoading },
    accessToken: { interval },
    userDetails: { loading: profileLoading, profileInfo },
  } = state;

  const handleLogoutButton = async (e) => {
    try {
      await logout(dispatch);
      clearInterval(interval);
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <StyledNav>
      <img src={logo} alt="main-logo" />
      <ProfileActionWrapper>
        <DropDownButton
          type="button"
          onClick={() => setIsCollapse((prev) => !prev)}
        >
          {profileLoading ? (
            <Loading color="#2f80ed" width="32" height="36" />
          ) : (
            <>
              <img
                src={
                  profileInfo.photo
                    ? profileInfo.photo
                    : "https://via.placeholder.com/32x36"
                }
                alt="profile"
                style={{ width: "32px", height: "36px" }}
              />
              <span>{profileInfo.name}</span>
            </>
          )}
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
          <LogoutButton onClick={handleLogoutButton}>
            <RiLogoutBoxRLine size={19} />
            <span>
              {logoutLoading ? (
                <Loading color="#EB5757" width={"16px"} height={"16px"} />
              ) : (
                "Logout"
              )}
            </span>
          </LogoutButton>
        </ProfileCard>
      </ProfileActionWrapper>
    </StyledNav>
  );
}

export default Nav;
