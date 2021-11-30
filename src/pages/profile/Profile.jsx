//i Custom components
import {
  StyledProfile,
  ProfileHeader,
  BackButton,
  ProfileEditTop,
} from "./Profile.styled";
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
import ChangeInfo from "../../layout/changeInfo/ChangeInfo";
import { SrOnly } from "../../store/GlobalStyles.styled";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Profile() {
  const { state, dispatch } = useGlobalContext();
  const { userInfo, accessToken, profileEditing } = state;

  const handleBackButton = (e) => {
    dispatch({
      type: ACTIONS.USER_PROFILE_EDIT,
      payload: { profileEditing: false },
    });
  };

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
      {!profileEditing && (
        <>
          <ProfileHeader>
            <h1>Personal Info</h1>
            <p>Basic info, like your name and photo</p>
          </ProfileHeader>
          <ProfileDetails />
        </>
      )}

      {profileEditing && (
        <>
          <ProfileEditTop>
            <SrOnly>Personal Info</SrOnly>
            <BackButton onClick={handleBackButton} type="button">
              <MdOutlineKeyboardArrowLeft size={27} /> Back
            </BackButton>
          </ProfileEditTop>
          <ChangeInfo />
        </>
      )}
    </StyledProfile>
  );
}

export default Profile;
