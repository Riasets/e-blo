export const AuthActions = {
    LOGIN: 'LOGIN',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_LOAD: 'LOGIN_LOAD',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    REGISTER_ERROR: 'REGISTER_ERROR',
    REGISTER_LOAD: 'REGISTER_LOAD',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
};

const getAuthActions = () => ({
    login: (user: Headers) => ({type: AuthActions.LOGIN, payload: user}),
    loginError: (error: string) => ({type: AuthActions.LOGIN_ERROR, payload: error}),
    loginLoad: () => ({type: AuthActions.LOGIN_LOAD}),
    loginSuccess: (userInfo:object) => ({type: AuthActions.LOGIN_SUCCESS, payload: userInfo}),
    logout: () => ({type: AuthActions.LOGOUT}),
    register: (user:object) => ({type: AuthActions.REGISTER, payload: user}),
    registerError: (error: string) => ({type: AuthActions.REGISTER_ERROR, payload: error}),
    registerLoad: () => ({type: AuthActions.REGISTER_LOAD}),
    registerSuccess: () => ({type: AuthActions.REGISTER_SUCCESS}),
});

export default getAuthActions();