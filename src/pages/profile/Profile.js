//i Custom components
import { StyledProfile } from "./Profile.styled";
import Nav from "../../component/nav/Nav";
import { Navigate } from "react-router-dom";
import { existInLS } from "../../utilities/functions";
import { useEffect, runFuncInInterval } from "react";
import {
  useGlobalContext,
  getUserProfileDetails,
  getAccessTokenToState,
} from "../../store/GlobalContextProvider";

function Profile() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        console.log("above gat");
        getAccessTokenToState(dispatch);
        console.log("below gat");
        runFuncInInterval(getAccessTokenToState, 60, dispatch);
        console.log("above gupd");
        await getUserProfileDetails(dispatch, state);
        console.log("below gat");
      } catch (err) {
        console.error(err.response);
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
