import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import { GlobalStyles } from "../store/GlobalStyles.styled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  getAccessToken,
  useGlobalContext,
  actions,
} from "../store/GlobalContextProvider";
import { useEffect } from "react";
import { existInLS, fetchFromLS } from "../utilities/functions";

function App() {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    const getnewAT = async () => {
      try {
        if (existInLS("userInfo")) {
          const { refreshToken, userId } = fetchFromLS("userInfo");
          const newAccessToken = await getAccessToken(userId, refreshToken);
          dispatch({
            type: actions.NEW_AT,
            payload: { accessToken: newAccessToken },
          });
        }
      } catch (err) {
        //td show some notification if promise got rejected
        console.error(err);
      }
    };
    getnewAT();
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
