//i react imports
import { createContext, useReducer, useMemo, useContext } from "react";
import axios from "axios";
import {
  saveToLS,
  fetchFromLS,
  existInLS,
  runFuncInInterval,
} from "../utilities/functions";

export const GlobalContext = createContext();

const baseURLOfApi = "https://authentication-system-api.herokuapp.com";

export const actions = {
  USER_LOGIN: "user-login",
  NEW_AT: "new-accesstoken",
};

const initialState = {
  accessToken: undefined,
  useInfo: fetchFromLS("userInfo") || {},
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
    console.log(res);
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
      type: actions.USER_LOGIN,
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
 * @param {String} id Id of logged in user || alias "userId"
 * @param {String} refreshToken refreshToken of the logged in user
 * @return {String} new accesstoken
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
    dispatch({
      type: actions.NEW_AT,
      payload: { accessToken: res.data.accessToken },
    });
  } catch (err) {
    console.error(err.response);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        accessToken: action.payload.accessToken,
        userInfo: action.payload.userInfo,
      };

    case actions.NEW_AT:
      return { ...state, accessToken: action.payload.accessToken };
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
