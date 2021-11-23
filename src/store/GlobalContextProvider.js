//i react imports
import { createContext, useReducer, useMemo, useContext } from "react";
import axios from "axios";
import {
  saveToLS,
  fetchFromLS,
  existInLS,
  runFuncInInterval,
  deleteFromLS,
} from "../utilities/functions";

export const GlobalContext = createContext();

const baseURLOfApi = "https://authentication-system-api.herokuapp.com";

export const ACTIONS = {
  USER_LOGIN: "user-login",
  NEW_AT: "new-accesstoken",
  USER_LOGGED_IN: "profile-info",
};

const initialState = {
  accessToken: undefined,
  userInfo: fetchFromLS("userInfo") || {},
  profileInfo: {},
};

/**
 * @param {Object} registerData - from register form
 */
export const register = async (registerData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //i non 2xx response in axios is treated as "errors"
    //i that's why we are catching/throwing it in catch block
    const res = await axios.post(
      //! DEAL WITH THIS LATER
      `${baseURLOfApi}/user/register`,
      registerData,
      config
    );
  } catch (err) {
    throw err;
  }
};

/**
 * @param {Object} loginCred - data from login form
 * @param {Function} dispatch - funtion from useReducer through useGlobalContext
 * @use To get data from logging response and send it to the state
 */
export const login = async (loginCred, dispatch) => {
  try {
    //td send login Data and get back response data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      data: { accessToken, refreshToken, userId },
    } = await axios.post(`${baseURLOfApi}/user/login`, loginCred, config);

    //td dispatch the action
    dispatch({
      type: ACTIONS.USER_LOGIN,
      payload: { accessToken, userInfo: { refreshToken, userId } },
    });

    //td save to lS
    saveToLS("userInfo", { refreshToken, userId });

    runFuncInInterval(getAccessTokenToState, 60, dispatch);
  } catch (err) {
    throw err;
  }
};

/**
 * i fetching user from LS and making a delete request
 * i thereafter deleting user from lS
 * i then redirecting to /login
 */
export const logout = async () => {
  const { refreshToken, userId: id } = fetchFromLS("userInfo");

  try {
    //td send login Data and get back response data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        refreshToken,
        id,
      },
    };
    await axios.delete(`${baseURLOfApi}/user/logout`, config);
    deleteFromLS("userInfo");
  } catch (err) {
    throw err;
  }
};

/**
 * @param {String} accessToken new fetched access token
 * @param {String} userId User id from Local storage
 * @returns User data of logged in User
 */
export const getUserProfileDetails = async (accessToken, userId) => {
  try {
    //td send userId and accesstoken to get back response data
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.get(
      `${baseURLOfApi}/user/profile/${userId}`,
      config
    );
    return res.data.user;
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {Function} dispatch Optional - if present then it will set state too
 * @returns access token using refresh token
 */
export const getAccessTokenToState = async (dispatch) => {
  if (!existInLS("userInfo")) return;
  const { refreshToken, userId: id } = fetchFromLS("userInfo");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      `${baseURLOfApi}/refresh-token`,
      { refreshToken, id },
      config
    );
    if (dispatch) {
      dispatch({
        type: ACTIONS.NEW_AT,
        payload: { accessToken: res.data.accessToken },
      });
    } else {
      return res.data.accessToken;
    }
  } catch (err) {
    console.error(err.response);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.USER_LOGIN:
      return {
        accessToken: action.payload.accessToken,
        userInfo: action.payload.userInfo,
      };

    case ACTIONS.NEW_AT:
      return { ...state, accessToken: action.payload.accessToken };

    case ACTIONS.USER_LOGGED_IN:
      return { ...state, profileInfo: action.payload.profileInfo };
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;
