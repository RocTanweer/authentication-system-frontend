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
import {
  logout,
  useGlobalContext,
  ACTIONS,
} from "../../store/GlobalContextProvider";

/**
 * i instead of wrapping native <nav></nav> component, it wraps styled one
 * @param {} props it will accept any native html attr or any custom one for styled components
 * @returns  {} styled component
 */
function Nav() {
  const [isCollapse, setIsCollapse] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  const { loading } = state;

  const name = "Xanthe Neal";

  const handleLogoutButton = async (e) => {
    try {
      dispatch({ type: ACTIONS.USER_MAKING_REQUEST });
      await logout();
      dispatch({ type: ACTIONS.USER_LOGOUT });
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err.response);
    }
  };

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
          <LogoutButton onClick={handleLogoutButton}>
            <RiLogoutBoxRLine size={19} />
            <span>{loading ? <Loading color="#EB5757" /> : "Logout"}</span>
          </LogoutButton>
        </ProfileCard>
      </ProfileActionWrapper>
    </StyledNav>
  );
}

export default Nav;
