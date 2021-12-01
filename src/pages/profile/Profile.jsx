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
import { useEffect } from "react";
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
  const { userInfo, accessToken, profileEditing, isLoggedIn } = state;

  const handleBackButton = (e) => {
    dispatch({
      type: ACTIONS.USER_PROFILE_EDIT,
      payload: { profileEditing: false },
    });
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const modRes = await getUserProfileDetails(
          accessToken,
          userInfo.userId
        );
        dispatch({
          type: ACTIONS.USER_LOGGED_IN,
          payload: {
            profileInfo: {
              ...modRes,
              password: "",
            },
          },
        });
      } catch (err) {
        console.error(err.response);
      }
    };
    dispatch({
      type: ACTIONS.USER_MAKING_REQUEST,
    });
    if (!isLoggedIn) {
      return null;
    } else {
      getUserDetails();
    }
  }, [isLoggedIn]);

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
