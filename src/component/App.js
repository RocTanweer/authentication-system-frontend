import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import { GlobalStyles } from "../store/GlobalStyles.styled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  getAccessTokenToState,
  useGlobalContext,
} from "../store/GlobalContextProvider";
import { useEffect } from "react";
import { runFuncInInterval } from "../utilities/functions";

function App() {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getAccessTokenToState(dispatch);
    runFuncInInterval(getAccessTokenToState, 60, dispatch);
  }, []);
  return (
    <main>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Navigate replace to="/signup" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
