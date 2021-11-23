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
import { FaUserAlt } from "react-icons/fa";

//i custom hooks
import { register } from "../../store/GlobalContextProvider";
import { useNavigate, Navigate } from "react-router";
import { existInLS } from "../../utilities/functions";

function Signup() {
  const navigate = useNavigate();

  const handleSignupForm = async (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      //i it will be rejected promise if response status is non 2xx. hense, no redirect to /login page
      await register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      });
      navigate("/login", { replace: true });
    } catch (err) {
      //td Do some notification pop-up when promise rejected
      console.log(err.response);
    }
  };

  return (
    <>
      {/*To tell the SR that this is a signup page  */}
      {existInLS("userInfo") && <Navigate to="/profile" replace="true" />}
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
          <SignupForm onSubmit={handleSignupForm}>
            <InputCard mb={14.5} width={356.48} height={48} borderRadius={8}>
              <FaUserAlt color="#828282" size={19} />
              <Input
                small
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="off"
              />
            </InputCard>
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
