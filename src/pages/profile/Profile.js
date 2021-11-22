//i Custom components
import { StyledProfile } from "./Profile.styled";
import Nav from "../../component/nav/Nav";
import { Navigate } from "react-router-dom";
import { existInLS } from "../../utilities/functions";

function Profile() {
  return (
    <StyledProfile>
      {!existInLS("userInfo") && <Navigate to="/login" replace="true" />}
      <Nav />
    </StyledProfile>
  );
}

export default Profile;
