//i Custom components
import { StyledProfile } from "./Profile.styled";
import Nav from "../../component/nav/Nav";
import { Navigate } from "react-router-dom";
import { existInLS, runFuncInInterval } from "../../utilities/functions";
import { useEffect } from "react";
import {
  useGlobalContext,
  getUserProfileDetails,
  getAccessTokenToState,
  ACTIONS,
} from "../../store/GlobalContextProvider";

function Profile() {
  const { state, dispatch } = useGlobalContext();
  console.log("hello from profile");

  useEffect(() => {
    const getUserDetails = async () => {
      const {
        userInfo: { userId },
      } = state;
      console.log(userId);
      try {
        const newAccessToken = await getAccessTokenToState();
        console.log(newAccessToken);
        runFuncInInterval(getAccessTokenToState, 60, dispatch);
        const profileInfo = await getUserProfileDetails(newAccessToken, userId);
        dispatch({
          type: ACTIONS.USER_LOGGED_IN,
          payload: { profileInfo },
        });
        dispatch({
          type: ACTIONS.NEW_AT,
          payload: { accessToken: newAccessToken },
        });
      } catch (err) {
        console.log(err.response);
      }
    };
    getUserDetails();
  }, []);

  return (
    <StyledProfile>
      {!existInLS("userInfo") && <Navigate to="/login" replace="true" />}
      <Nav />
    </StyledProfile>
  );
}

export default Profile;
