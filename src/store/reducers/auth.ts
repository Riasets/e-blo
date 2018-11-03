import ActionType from '../actions/actions';

const initialState = {
  email: null,
  error: false,
  expires_in: null,
  isAdmin: null,
  isLoading: false,
  logged: false,
  name: null,
  schedule: null,
  status: null,
  token: null,
  refreshToken: null,
  tokenIsRefreshing: false,
};

// @ts-ignore
const Auth = (state:object = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.payload.email,
        error: false,
        expires_in: action.payload.expires_in,
        isAdmin: action.payload.isAdmin,
        isLoading: false,
        logged: true,
        name: action.payload.name,
        schedule: action.payload.schedule,
        refreshToken: action.payload.refreshToken,
        token: action.payload.token,
      };
    }
    case ActionType.LOGIN_ERROR: {
      return {
        ...initialState,
        error: action.payload,
        logged: false,
      };
    }
    case ActionType.LOGIN_LOAD: {
      return{
        ...initialState,
        error: false,
        isLoading: true,
        logged: false,
      };
    }
    case ActionType.REGISTER_LOAD: {
      return{
        ...state,
        error: false,
        isLoading: true,
        logged: false,
        status: false,
      };
    }
    case ActionType.REGISTER_ERROR: {
      return{
        ...state,
        error: action.payload,
        isLoading: false,
        logged: false,
        status: false,
      };
    }
    case ActionType.REGISTER_SUCCESS: {
      return{
        ...state,
        error: false,
        isLoading: false,
        logged: false,
        status: 'registered',
      };
    }
    case ActionType.REDIRECT: {
      return{
        ...state,
        error: initialState.error,
        status: initialState.status,
      };
    }
    case ActionType.LOGOUT: {
      return{
        ...initialState,
      };
    }
    case ActionType.TOKEN_IS_REFRESHING: {
      return {
        ...state,
        tokenIsRefreshing: true,
      };
    }
    case ActionType.SET_NEW_TOKEN: {
      return {
        ...state,
        expires_in: action.payload.expires_in,
        refreshToken: action.payload.refreshToken,
        token: action.payload.token,
        tokenIsRefreshing: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const getToken = (state: any) => ({
  token: state.Auth.token,
  expires_in: state.Auth.expires_in});
export const getRefreshToken = (state: any) => ({
  token: state.Auth.refreshToken,
});
export const getStatusRefreshingToken = (state: any) => (state.Auth.tokenIsRefreshing);
export default Auth;
