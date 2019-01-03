export const AuthActions = {
  LOGIN: 'LOGIN',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_LOAD: 'LOGIN_LOAD',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_AUTH: 'LOGOUT',
  REDIRECT: 'REDIRECT',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  REGISTER: 'REGISTER',
  REGISTER_ERROR: 'REGISTER_ERROR',
  REGISTER_LOAD: 'REGISTER_LOAD',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  SET_NEW_TOKEN: 'SET_NEW_TOKEN',
  TOKEN_IS_REFRESHING: 'TOKEN_IS_REFRESHING',
};

const getAuthActions = () => ({
  login: (user: Headers) => ({ type: AuthActions.LOGIN, payload: user }),
  loginError: (error: string) => ({ type: AuthActions.LOGIN_ERROR, payload: error }),
  loginLoad: () => ({ type: AuthActions.LOGIN_LOAD }),
  loginSuccess: (userInfo:object) => ({ type: AuthActions.LOGIN_SUCCESS, payload: userInfo }),
  logoutAuth: () => ({ type: AuthActions.LOGOUT_AUTH }),
  redirect: () => ({ type: AuthActions.REDIRECT }),
  refreshToken: () => ({ type: AuthActions.REFRESH_TOKEN }),
  register: (user:any) => ({ type: AuthActions.REGISTER, payload: user }),
  registerError: (error: string) => ({ type: AuthActions.REGISTER_ERROR, payload: error }),
  registerLoad: () => ({ type: AuthActions.REGISTER_LOAD }),
  registerSuccess: () => ({ type: AuthActions.REGISTER_SUCCESS }),
  setNewToken: (info: object) => ({ type: AuthActions.SET_NEW_TOKEN, payload: info }),
  tokenIsRefreshing: () => ({ type: AuthActions.TOKEN_IS_REFRESHING }),
});

export default getAuthActions();
