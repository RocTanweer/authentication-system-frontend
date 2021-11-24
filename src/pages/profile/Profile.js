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

  useEffect(() => {
    const getUserDetails = async () => {
      const {
        userInfo: { userId },
      } = state;
      try {
        const newAccessToken = await getAccessTokenToState();
        runFuncInInterval(getAccessTokenToState, 60, dispatch);
        const profileInfo = await getUserProfileDetails(newAccessToken, userId);
        dispatch({
          type: ACTIONS.USER_LOGGED_IN,
          payload: { profileInfo },
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
