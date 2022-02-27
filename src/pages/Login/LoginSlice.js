import { AuthActionTypes } from "../../redux/actions/authTypes";

const initialState = {
  token: {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
  },
  login: {
    error: false,
    isFetching: false,
    success: false,
    message: null,
    countError: 0,
  },
  captcha: {
    isFetching: false,
    success: false,
    message: null,
  },
  logout: {
    error: false,
    isFetching: false,
    success: false,
    message: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_START:
      return {
        ...state,
        login: {
          isFetching: true,
          error: false,
          success: false,
          message: null,
          countError: 0,
        },
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: {
          isAuthenticated: true,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
        login: {
          isFetching: false,
          success: true,
          message: null,
          countError: 0,
        },
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        token: {
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
        },
        login: {
          isFetching: false,
          success: false,
          message: action.payload,
          countError: state.login.countError + 1,
        },
      };

    case AuthActionTypes.LOGIN_GOOGLE_SUCCESS:
      return {
        ...state,
        token: {
          isAuthenticated: true,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
        login: {
          isFetching: false,
          success: true,
          message: null,
          countError: 0,
        },
      };

    case AuthActionTypes.LOGOUT_START:
      return {
        ...state,
        logout: {
          isFetching: true,
          error: false,
          success: false,
          message: null,
        },
      };
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        token: {
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
        },
        logout: {
          ...state.logout,
          isFetching: false,
          error: false,
          success: true,
          message: null,
        },
      };

    case AuthActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        logout: {
          ...state.logout,
          isFetching: false,
          error: true,
          success: false,
          message: action.payload,
        },
      };
    case AuthActionTypes.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        token: {
          ...state.token,
          isAuthenticated: true,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
      };

    case AuthActionTypes.VERIFY_CAPTCHA_SUCCESS:
      return {
        ...state,
        captcha: {
          isFetching: false,
          success: true,
          message: null,
        },
      };

    case AuthActionTypes.VERIFY_CAPTCHA_FAILURE:
      return {
        ...state,
        captcha: {
          isFetching: false,
          success: false,
          message: action.payload,
        },
      };
    default: {
      return state;
    }
  }
};
export default authReducer;
