export const AuthActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    LOGIN_SAVE: 'LOGIN_SAVE'
};

const getAuthActions = () => ({
    login: (user:object) => ({type: AuthActions.LOGIN, headers: user}),
    logout: () => ({type: AuthActions.LOGOUT}),
    register: (user:object) => ({type: AuthActions.REGISTER, payload: user})
});

export default getAuthActions();