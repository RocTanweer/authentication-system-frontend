//i Custom components
import { StyledProfile } from "./Profile.styled";
import Nav from "../../component/nav/Nav";
import { Navigate } from "react-router-dom";
import { existInLS } from "../../utilities/functions";
import { useEffect, useRef } from "react";
import {
  useGlobalContext,
  getUserProfileDetails,
  ACTIONS,
} from "../../store/GlobalContextProvider";

function Profile() {
  const { state, dispatch } = useGlobalContext();
  const { userInfo, accessToken } = state;

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const getUserDetails = async () => {
      try {
        console.log(accessToken);
        const profileInfo = await getUserProfileDetails(
          accessToken,
          userInfo.userId
        );
        dispatch({
          type: ACTIONS.USER_LOGGED_IN,
          payload: { profileInfo },
        });
      } catch (err) {
        console.log(err.response);
      }
    };
    getUserDetails();
  }, [accessToken]);

  return (
    <StyledProfile>
      {!existInLS("userInfo") && <Navigate to="/login" replace="true" />}
      <Nav />
    </StyledProfile>
  );
}

export default Profile;
