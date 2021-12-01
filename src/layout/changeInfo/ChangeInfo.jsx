import {
  InputCard,
  StyledSection,
  ChangeInfoForm,
  WrapperCI,
  InputCI,
} from "./ChangeInfo.styled";
import Button from "../../component/button/Button";
import {
  ACTIONS,
  useGlobalContext,
  updateUserProfileDetails,
  getUserProfileDetails,
} from "../../store/GlobalContextProvider";
import { filterKeyValuePair } from "../../utilities/functions";

function ChangeInfo() {
  const { state, dispatch } = useGlobalContext();
  const { userInfo, accessToken } = state;

  const {
    editProfileInfo: { photo, name, bio, phone, email, password },
  } = state;

  const handleFormInputs = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    dispatch({
      type: ACTIONS.USER_EDITING_PROFILE,
      payload: {
        name: inputName,
        value: inputValue,
      },
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //td a notifition here please
    if (!Number(e.target.phone.value) && e.target.phone.value !== "") return;
    try {
      // dispatch({ type: ACTIONS.USER_MAKING_REQUEST });
      // dispatch({
      //   type: ACTIONS.USER_PROFILE_EDIT,
      //   payload: { profileEditing: false },
      // });
      // const update = filterKeyValuePair(
      //   state.editProfileInfo,
      //   state.profileInfo
      // );
      // await updateUserProfileDetails(userInfo.userId, accessToken, update);
      // const modRes = await getUserProfileDetails(accessToken, userInfo.userId);
      // dispatch({
      //   type: ACTIONS.USER_LOGGED_IN,
      //   payload: {
      //     profileInfo: {
      //       ...modRes,
      //       password: "",
      //     },
      //   },
      // });
    } catch (err) {
      console.error(err.response);
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
                src={!photo && "https://via.placeholder.com/72x72"}
                alt="profile-pic"
              />
            </label>
            <input type="file" id="picFile" name="photo" />
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
            Save
          </Button>
        </ChangeInfoForm>
      </WrapperCI>
    </StyledSection>
  );
}

export default ChangeInfo;
