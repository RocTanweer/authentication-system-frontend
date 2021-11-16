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

//i third-party components
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

function Login() {
  return (
    <>
      {/*To tell the SR that this is a signup page  */}
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
          <LoginForm>
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
              Login
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
