//i Custom Components
import {
  StyledSignup,
  ImageWrapper,
  SignupForm,
  InputCard,
} from "./Signup.styled";
import Card from "../../component/card/Card";
import { SrOnly, StyledLink } from "../../store/GlobalStyles.styled";
import Logo from "../../assets/logo.svg";
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";

//i third-party components
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

function Signup() {
  return (
    <>
      {/*To tell the SR that this is a signup page  */}
      <SrOnly>Signup page</SrOnly>
      <Card width={473.83} height={634.3}>
        {/* Div wrapper */}
        <StyledSignup>
          {/* SECTION */}
          <SrOnly>Signup section</SrOnly>
          <ImageWrapper>
            {/* Div */}
            <img src={Logo} alt="devchallenges logo" />
          </ImageWrapper>
          <strong>join thousands of learners from around the world</strong>
          <p>
            Master web development by making real-life projects. There are
            multiple paths for you to choose.
          </p>
          <SignupForm>
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
              Start coding now
            </Button>
          </SignupForm>
          <p className="signup-suggestion">
            <span>
              Already a member?
              <StyledLink to="/login">Login</StyledLink>
            </span>
          </p>
        </StyledSignup>
      </Card>
    </>
  );
}

export default Signup;
