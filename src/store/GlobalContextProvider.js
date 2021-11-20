//i react imports
import { createContext, useReducer, useMemo, useContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const actions = {
  USER_REGISTER: "user-register",
};

const initialState = {
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
    const res = await axios.post(
      //! DEAL WITH THIS LATER
      "https://authentication-system-api.herokuapp.com/user/register",
      registerData,
      config
    );
    console.log(res);
  } catch (err) {
    throw err;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case action.USER_REGISTER:
      return { ...state };
      break;

    default:
      return state;
      break;
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
