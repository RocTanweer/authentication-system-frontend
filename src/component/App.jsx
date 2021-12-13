import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import { GlobalStyles } from "../store/GlobalStyles.styled";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "../pages/chat/Chat";
import { useLayoutEffect } from "react";
import { useGlobalContext } from "../store/GlobalContextProvider";
import {
  getAccessTokenToState,
  getAccessTokenIntervalToState,
} from "../actions";
import { runFuncInInterval, existInLS } from "../utilities/functions";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  const { dispatch } = useGlobalContext();

  useLayoutEffect(() => {
    const getNewAT = async () => {
      await getAccessTokenToState(dispatch);
      const interval = runFuncInInterval(getAccessTokenToState, 60, dispatch);
      getAccessTokenIntervalToState(interval, dispatch);
    };
    if (existInLS("userInfo")) {
      getNewAT();
    }
  }, []);

  return (
    <main>
      <BrowserRouter>
        <ReactNotification />
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
