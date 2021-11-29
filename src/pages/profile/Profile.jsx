//i Custom components
import { StyledProfile, ProfileHeader } from "./Profile.styled";
import Nav from "../../component/nav/Nav";
import { Navigate } from "react-router-dom";
import { existInLS } from "../../utilities/functions";
import { useEffect, useRef } from "react";
import {
  useGlobalContext,
  getUserProfileDetails,
  ACTIONS,
} from "../../store/GlobalContextProvider";

import ProfileDetails from "../../layout/profile/ProfileDetails";

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
      <ProfileHeader>
        <h1>Personal Info</h1>
        <p>Basic info, like your name and photo</p>
      </ProfileHeader>
      <ProfileDetails />
    </StyledProfile>
  );
}

export default Profile;
