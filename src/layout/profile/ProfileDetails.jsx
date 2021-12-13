import { StyledProfileDetails, Wrapper, List } from "./ProfileDetails.styled";
import Button from "../../component/button/Button";
import { useGlobalContext, ACTIONS } from "../../store/GlobalContextProvider";
import Loading from "../../component/loading/Loading";

const profileDetails = {
  photo: "https://via.placeholder.com/72x72",
  name: "Xanthe Neal",
  bio: "I am a software developer and a big fan of devchallenges...",
  phone: 74795192,
  email: "xanthe.neal@gmail.com",
  password: "***********",
};

function ProfileDetails({ setProfileEditing }) {
  const { state, dispatch } = useGlobalContext();

  const {
    userDetails: { profileInfo, loading: detailsLoading },
    accessToken: { loading: ATLoading },
  } = state;

  const handleEditButton = (e) => {
    setProfileEditing(true);
  };

  return (
    <StyledProfileDetails>
      <Wrapper width={845.91} height={580.54} borderRadius={12}>
        <header>
          <div>
            <h2>Profile</h2>
            <p>Some info maybe visible to other people</p>
          </div>
          <Button type="button" neutral md onClick={handleEditButton}>
            Edit
          </Button>
        </header>
        <List>
          {detailsLoading || ATLoading ? (
            <Loading color="#2f80ed" width={"50px"} height={"50px"} />
          ) : (
            Object.entries(profileInfo).map(([key, value], index) => {
              if (index === 0) {
                return (
                  <div key={key}>
                    <dt>{key}</dt>
                    <dd>
                      <img
                        src={!value && "https://via.placeholder.com/72x72"}
                        alt="user-profile-pic"
                      />
                    </dd>
                  </div>
                );
              }
              if (key === "password") {
                return (
                  <div key={key}>
                    <dt>{key}</dt>
                    <dd>{"***********"}</dd>
                  </div>
                );
              }
              return (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{!value ? "N/A" : value}</dd>
                </div>
              );
            })
          )}
        </List>
      </Wrapper>
    </StyledProfileDetails>
  );
}

export default ProfileDetails;
