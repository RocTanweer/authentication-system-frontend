import {
  userSignupReducer,
  userLoginReducer,
  userDetailsReducer,
  userLogoutReducer,
  userDetailsUpdateReducer,
  accessTokenToState,
} from "../reducers/";
import { fetchFromLS } from "../utilities/functions";

export const baseURLOfApi = "https://roc-auth.onrender.com";

/**
 * i This function is same as combineReducer from redux
 * @param {Object} slices An Object containing all the reducers in a key-value pair
 * @returns rootReducer - An Object containing updated state of each reducer in a key(reducer name)-value(updated state) pair
 */
const combineReducers = (slices) => {
  return (state, action) => {
    return Object.keys(slices).reduce((accu, prop) => {
      return {
        ...accu,
        [prop]: slices[prop](accu[prop], action),
      };
    }, state);
  };
};

export const rootReducer = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userLogout: userLogoutReducer,
  userDetailsUpdate: userDetailsUpdateReducer,
  accessToken: accessTokenToState,
});

export const initialState = {
  userSignup: {},
  userLogin: { userInfo: fetchFromLS("userInfo") || {} },
  userDetails: { loading: true },
  userLogout: {},
  userDetailsUpdate: {},
  accessToken: {},
};
