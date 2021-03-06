//i Custom Components
import {
  StyledLogin,
  ImageWrapper,
  LoginForm,
  InputCard,
} from "./Login.styled";
import Card from "../../component/card/Card";
import { SrOnly, StyledLink } from "../../store/GlobalStyles.styled";
import Logo from "../../assets/logo.svg";
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";
import Loading from "../../component/loading/Loading";

//i third-party components
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { useGlobalContext } from "../../store/GlobalContextProvider";
import { login } from "../../actions";
import { useNavigate, Navigate } from "react-router";
import {
  emailChecker,
  existInLS,
  notificationGenerator,
} from "../../utilities/functions";

function Login() {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const {
    userLogin: { loading: loginLoading },
  } = state;

  const handleLoginForm = async (e) => {
    try {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (!(email && password)) throw new Error("All fields are required");

      emailChecker(email);

      const loginCred = {
        email,
        password,
      };

      await login(loginCred, dispatch);
      navigate("/profile", { replace: true });
    } catch (err) {
      notificationGenerator(err);
    }
  };

  return (
    <>
      {/*To tell the SR that this is a signup page  */}{" "}
      {existInLS("userInfo") && <Navigate to="/profile" replace="true" />}
      <SrOnly>Login page</SrOnly>
      <Card width={473.83} height={544.37}>
        {/* Div wrapper */}
        <StyledLogin>
          {/* SECTION */}
          <ImageWrapper>
            {/* Div */}
            <img src={Logo} alt="devchallenges logo" />
          </ImageWrapper>
          <h2>Login</h2>
          <LoginForm onSubmit={handleLoginForm}>
            <InputCard mb={14.5} width={356.48} height={48} borderRadius={8}>
              <MdEmail color="#828282" size={24} />
              <Input
                small
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
            </InputCard>
            <InputCard mb={14.5} width={356.48} height={48} borderRadius={8}>
              <MdLock color="#828282" size={24} />
              <Input
                small
                type="password"
                name="password"
                placeholder="Password"
              />
            </InputCard>

            <Button primary block type="submit">
              {loginLoading ? (
                <Loading color="#ffffff" size={"16px"} height={"16px"} />
              ) : (
                "Login"
              )}
            </Button>
          </LoginForm>
          <p className="signup-suggestion">
            <span>
              Don't have an account?
              <StyledLink to="/signup">Register</StyledLink>
            </span>
          </p>
        </StyledLogin>
      </Card>
    </>
  );
}

export default Login;
