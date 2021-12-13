import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_DELETE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_DELETE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_DELETE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_EDIT,
  USER_DETAILS_DELETE,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
} from "../actionTypes";

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: true };
    case USER_REGISTER_DELETE:
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload.userInfo };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: true };
    case USER_LOGIN_DELETE:
      return {};
    default:
      return state;
  }
};

export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, loading: false };
    case USER_LOGOUT_FAIL:
      return { ...state, loading: false, error: true };
    case USER_LOGOUT_DELETE:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        profileInfo: action.payload.profileInfo,
        editProfileInfo: action.payload.profileInfo,
      };
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: true };
    case USER_DETAILS_EDIT:
      return {
        ...state,
        editProfileInfo: {
          ...state.editProfileInfo,
          [action.payload.name]: action.payload.value,
        },
      };
    case USER_DETAILS_DELETE:
      return { loading: true };
    default:
      return state;
  }
};

export const userDetailsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_UPDATE_SUCCESS:
      return { ...state, loading: false };
    case USER_DETAILS_UPDATE_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
