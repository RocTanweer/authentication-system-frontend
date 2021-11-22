//i react imports
import { createContext, useReducer, useMemo, useContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const baseURLOfApi = "https://authentication-system-api.herokuapp.com";

export const actions = {
  USER_LOGIN: "user-login",
};

const initialState = {
  accessToken: undefined,
  useInfo: {},
};

/**
 * @param {} registerData from register form
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
    console.log(accessToken, refreshToken, userId);
    dispatch({
      type: actions.USER_LOGIN,
      payload: { accessToken, userInfo: { refreshToken, userId } },
    });

    //td dispatch the action
  } catch (err) {
    throw err;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      console.log(state);
      return {
        accessToken: action.payload.accessToken,
        userInfo: action.payload.userInfo,
      };

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
