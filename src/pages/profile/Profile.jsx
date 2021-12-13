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
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../store/GlobalContextProvider";
import { getUserProfileDetails } from "../../actions";

import ProfileDetails from "../../layout/profile/ProfileDetails";
import ChangeInfo from "../../layout/changeInfo/ChangeInfo";
import { SrOnly } from "../../store/GlobalStyles.styled";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Profile() {
  const { state, dispatch } = useGlobalContext();
  const {
    userLogin: { userInfo },
    accessToken: { accessToken },
  } = state;
  const [profileEditing, setProfileEditing] = useState(false);

  const handleBackButton = (e) => {
    setProfileEditing(false);
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        await getUserProfileDetails(accessToken, userInfo.userId, dispatch);
      } catch (err) {
        console.error(err.response);
      }
    };

    if (!accessToken) {
      return null;
    } else {
      getUserDetails();
    }
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
          <ProfileDetails setProfileEditing={setProfileEditing} />
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
          <ChangeInfo setProfileEditing={setProfileEditing} />
        </>
      )}
    </StyledProfile>
  );
}

export default Profile;
