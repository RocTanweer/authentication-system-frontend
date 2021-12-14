import {
  InputCard,
  StyledSection,
  ChangeInfoForm,
  WrapperCI,
  InputCI,
} from "./ChangeInfo.styled";
import Button from "../../component/button/Button";
import { useGlobalContext } from "../../store/GlobalContextProvider";
import { updateUserProfileDetails, getUserProfileDetails } from "../../actions";
import { filterKeyValuePair, fileChanger } from "../../utilities/functions";
import { changeEditProfileInfo } from "../../actions";
import Loading from "../../component/loading/Loading";

function ChangeInfo({ setProfileEditing }) {
  const { state, dispatch } = useGlobalContext();

  const {
    userDetails: { profileInfo, editProfileInfo },
    userDetailsUpdate: { loading: updateLoading },
    accessToken: { accessToken },
    userLogin: { userInfo },
  } = state;

  const { photo, name, bio, phone, email, password } = editProfileInfo;

  const handleFormInputs = async (e) => {
    try {
      let name = e.target.name;
      let value;
      if (name === "photo") {
        value = await fileChanger(e.target.files[0], 72, 72);
      } else {
        value = e.target.value;
      }
      changeEditProfileInfo(name, value, dispatch);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //td a notifition here please
    try {
      const update = filterKeyValuePair(editProfileInfo, profileInfo);
      await updateUserProfileDetails(
        userInfo.userId,
        accessToken,
        update,
        dispatch
      );
      setProfileEditing(false);
      await getUserProfileDetails(accessToken, userInfo.userId, dispatch);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledSection>
      <WrapperCI width={845.91} height={827.56} borderRadius={12}>
        <header>
          <div>
            <h2>Change Info</h2>
            <p>Changes will be reflected to every services</p>
          </div>
        </header>
        <ChangeInfoForm onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="picFile">
              <img
                src={photo ? photo : "https://via.placeholder.com/72x72"}
                alt="profile-pic"
              />
            </label>
            <input
              type="file"
              id="picFile"
              name="photo"
              onChange={handleFormInputs}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <InputCard
              width={416.93}
              // 95.8
              height={52}
              borderRadius={12}
            >
              <InputCI
                id="name"
                small
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                width="100%"
                value={name}
                onChange={handleFormInputs}
              />
            </InputCard>
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <InputCard width={416.93} height={95.8} borderRadius={12}>
              <InputCI
                id="bio"
                small
                type="text"
                name="bio"
                placeholder="Enter your bio"
                autoComplete="off"
                width="100%"
                as="textarea"
                className="textarea"
                value={bio}
                onChange={handleFormInputs}
              />
            </InputCard>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <InputCard width={416.93} height={52} borderRadius={12}>
              <InputCI
                id="phone"
                small
                type="text"
                name="phone"
                placeholder="Enter your phone"
                autoComplete="off"
                width="100%"
                value={phone}
                onChange={handleFormInputs}
              />
            </InputCard>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <InputCard width={416.93} height={52} borderRadius={12}>
              <InputCI
                id="email"
                small
                type="text"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                width="100%"
                value={email}
                onChange={handleFormInputs}
              />
            </InputCard>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <InputCard width={416.93} height={52} borderRadius={12}>
              <InputCI
                id="password"
                small
                type="text"
                name="password"
                placeholder="Enter your new password"
                autoComplete="off"
                width="100%"
                value={password}
                onChange={handleFormInputs}
              />
            </InputCard>
          </div>
          <Button type="submit" primary sm>
            {updateLoading ? (
              <Loading color="#ffffff" size={"16px"} height={"16px"} />
            ) : (
              "Save"
            )}
          </Button>
        </ChangeInfoForm>
      </WrapperCI>
    </StyledSection>
  );
}

export default ChangeInfo;
