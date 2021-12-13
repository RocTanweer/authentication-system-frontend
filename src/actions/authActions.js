import {
  AUTH_ACCESSTOKEN_SUCCESS,
  AUTH_ACCESSTOKEN_FAIL,
  AUTH_ACCESSTOKEN_REQUEST,
  AUTH_ACCESSTOKEN_INTERVAL,
} from "../actionTypes";
import { fetchFromLS } from "../utilities/functions";
import { baseURLOfApi } from "../store/store";
import axios from "axios";

/**
 * @param {Function} dispatch funtion of useReducer
 */
export const getAccessTokenToState = async (dispatch) => {
  dispatch({ type: AUTH_ACCESSTOKEN_REQUEST });
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
      type: AUTH_ACCESSTOKEN_SUCCESS,
      payload: { accessToken: res.data.accessToken },
    });
  } catch (err) {
    dispatch({ type: AUTH_ACCESSTOKEN_FAIL });
    console.error(err.response);
  }
};

export const getAccessTokenIntervalToState = (interval, dispatch) => {
  dispatch({ type: AUTH_ACCESSTOKEN_INTERVAL, payload: { interval } });
};
