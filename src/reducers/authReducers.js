import {
  AUTH_ACCESSTOKEN_SUCCESS,
  AUTH_ACCESSTOKEN_REQUEST,
  AUTH_ACCESSTOKEN_FAIL,
  AUTH_ACCESSTOKEN_DELETE,
  AUTH_ACCESSTOKEN_INTERVAL,
} from "../actionTypes";

export const accessTokenToState = (state = {}, action) => {
  switch (action.type) {
    case AUTH_ACCESSTOKEN_REQUEST:
      return { ...state, loading: true };
    case AUTH_ACCESSTOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
      };
    case AUTH_ACCESSTOKEN_FAIL:
      return { ...state, loading: false, error: true };
    case AUTH_ACCESSTOKEN_INTERVAL:
      return { ...state, interval: action.payload.interval };
    case AUTH_ACCESSTOKEN_DELETE:
      return {};
    default:
      return state;
  }
};
