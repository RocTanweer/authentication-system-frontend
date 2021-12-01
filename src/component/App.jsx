import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import { GlobalStyles } from "../store/GlobalStyles.styled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "../pages/chat/Chat";
import { useLayoutEffect } from "react";
import {
  getAccessTokenToState,
  ACTIONS,
  useGlobalContext,
} from "../store/GlobalContextProvider";
import { runFuncInInterval, existInLS } from "../utilities/functions";
function App() {
  const { dispatch } = useGlobalContext();

  useLayoutEffect(() => {
    const getNewAT = async () => {
      const newAccessToken = await getAccessTokenToState();
      dispatch({
        type: ACTIONS.NEW_AT,
        payload: { accessToken: newAccessToken },
      });
      dispatch({
        type: ACTIONS.IS_LOGGED_IN,
      });
      runFuncInInterval(getAccessTokenToState, 60, dispatch);
    };
    if (existInLS("userInfo")) {
      dispatch({ type: ACTIONS.USER_MAKING_REQUEST });
      getNewAT();
    }
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
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
