import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_DELETE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_DELETE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_DELETE,
  AUTH_ACCESSTOKEN_SUCCESS,
  AUTH_ACCESSTOKEN_DELETE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_EDIT,
  USER_DETAILS_DELETE,
  USER_DETAILS_UPDATE_FAIL,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_REQUEST,
} from "../actionTypes";

import {
  runFuncInInterval,
  saveToLS,
  fetchFromLS,
  deleteFromLS,
} from "../utilities/functions";
import { getAccessTokenToState, getAccessTokenIntervalToState } from ".";
import { baseURLOfApi } from "../store/store";

/**
 * @param {Object} registerData Data from register form
 * @param {Function} dispatch function of useReducer
 */
export const register = async (registerData, dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
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
    dispatch({ type: USER_REGISTER_SUCCESS });
  } catch (err) {
    dispatch({ type: USER_REGISTER_FAIL });
    throw err;
  }
};

/**
 * @param {Object} loginCred data from login form
 * @param {Function} dispatch function from useReducer
 */
export const login = async (loginCred, dispatch) => {
  try {
    //td send login Data and get back response data
    dispatch({ type: USER_LOGIN_REQUEST });
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
      type: USER_LOGIN_SUCCESS,
      payload: { userInfo: { refreshToken, userId } },
    });

    //td save to lS
    saveToLS("userInfo", { refreshToken, userId });

    dispatch({
      type: AUTH_ACCESSTOKEN_SUCCESS,
      payload: { accessToken: accessToken },
    });
    const interval = runFuncInInterval(getAccessTokenToState, 60, dispatch);
    getAccessTokenIntervalToState(interval, dispatch);
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL });
    throw err;
  }
};

/**
 * deletes user from both Database and Localstorage. Resets the app state
 * @param {Function} dispatch function from useReducer
 */
export const logout = async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });

    const { refreshToken, userId: id } = fetchFromLS("userInfo");

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
    dispatch({ type: AUTH_ACCESSTOKEN_DELETE });
    dispatch({ type: USER_DETAILS_DELETE });
    dispatch({ type: USER_LOGOUT_SUCCESS });
    dispatch({ type: USER_REGISTER_DELETE });
    dispatch({ type: USER_LOGIN_DELETE });
    dispatch({ type: USER_LOGOUT_DELETE });
  } catch (err) {
    dispatch({ type: USER_LOGOUT_FAIL });
    throw err;
  }
};

/**
 * @param {String} accessToken token to get resources
 * @param {String} userId ID of currect logged-in user
 * @param {Function} dispatch function from useReducer
 */
export const getUserProfileDetails = async (accessToken, userId, dispatch) => {
  try {
    //td send userId and accesstoken to get back response data
    dispatch({ type: USER_DETAILS_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.get(
      `${baseURLOfApi}/user/profile/${userId}`,
      config
    );
    const { photo, name, bio, phone, email } = res.data.user;
    const modRes = {
      photo: photo ? photo : "",
      name,
      bio: bio ? bio : "",
      phone: phone ? phone : "",
      email,
      password: "",
    };
    dispatch({ type: USER_DETAILS_SUCCESS, payload: { profileInfo: modRes } });
  } catch (err) {
    dispatch({ type: USER_DETAILS_FAIL });
    throw err;
  }
};

/**
 * This function changes duplicated profileInfo in state for changeInfo Form
 * @param {String} name name of the prop
 * @param {String} value name of the value
 * @param {Function} dispatch function from useReducer
 */
export const changeEditProfileInfo = (name, value, dispatch) => {
  dispatch({ type: USER_DETAILS_EDIT, payload: { name, value } });
};

/**
 * @param {String} userId Id of the current user
 * @param {String} accessToken token to get resources
 * @param {Object} update to-be-updated key-value pairs
 * @param {Function} dispatch funtion from useReducer
 */
export const updateUserProfileDetails = async (
  userId,
  accessToken,
  update,
  dispatch
) => {
  try {
    dispatch({ type: USER_DETAILS_UPDATE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const url = `${baseURLOfApi}/user/profile/${userId}`;
    const body = {
      toBeUpdated: update,
    };
    await axios.patch(url, body, config);
    dispatch({ type: USER_DETAILS_UPDATE_SUCCESS });
  } catch (err) {
    dispatch({ type: USER_DETAILS_UPDATE_FAIL });
    throw err;
  }
};
