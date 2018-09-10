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
    loginError: () => ({type: AuthActions.LOGIN_ERROR}),
    loginLoad: () => ({type: AuthActions.LOGIN_LOAD}),
    loginSuccess: (userInfo:object) => ({type: AuthActions.LOGIN_SUCCESS, payload: userInfo}),
    logout: () => ({type: AuthActions.LOGOUT}),
    register: (user:object) => ({type: AuthActions.REGISTER, payload: user}),
    registerError: () => ({type: AuthActions.REGISTER_ERROR}),
    registerLoad: () => ({type: AuthActions.REGISTER_LOAD}),
    registerSuccess: () => ({type: AuthActions.REGISTER_SUCCESS}),
});

export default getAuthActions();